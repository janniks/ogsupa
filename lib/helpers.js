import { useEffect, useReducer, useState } from 'react';
import { supabase } from './supabaseClient';
import randomWords from 'random-words';

export function useHasMounted() {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  return hasMounted;
}

export function useDebounce(initialValue = '', delay) {
  const [actualValue, setActualValue] = useState(initialValue);
  const [debounceValue, setDebounceValue] = useState(initialValue);
  useEffect(() => {
    const debounceId = setTimeout(() => setDebounceValue(actualValue), delay);
    return () => clearTimeout(debounceId);
  }, [actualValue, delay]);
  return [debounceValue, setActualValue];
}

export function useForceUpdate() {
  return useReducer(() => ({}), {})[1];
}

export async function createEmptyProject() {
  try {
    const user = supabase.auth.user();

    console.log(randomWords({ exactly: 2, wordsPerString: 1 }).join('-'));
    const { data, error, status } = await supabase.from('projects').insert([
      {
        user_id: user.id,
        name: randomWords({ exactly: 2, wordsPerString: 1 }).join('-'),
      },
    ]);

    if (error && status !== 406) {
      throw error;
    }

    if (Array.isArray(data) && data.length > 0) return data[0];
    return data;
  } catch (error) {
    console.error(error.message);
  }
}

export async function getProject(projectId) {
  try {
    let { data, error, status } = await supabase
      .from('projects')
      .select()
      .eq('id', projectId)
      .single();

    if (error && status !== 406) {
      throw error;
    }

    return data;
  } catch (error) {
    console.error(error.message);
  }
}

export async function getProjects() {
  try {
    let { data, error, status } = await supabase.from('projects').select();

    if (error && status !== 406) {
      throw error;
    }

    console.log(data);
    return data;
  } catch (error) {
    console.error(error.message);
  }
}
