import Color from 'color';

const Preview = ({
  title,
  description,
  fontStyle,
  backgroundColor,
  leftMeta,
  rightMeta,
}) => {
  const c = Color(backgroundColor);
  const colors = c.isDark()
    ? { title: c.lightness(95), meta: c.lightness(90) }
    : { title: c.lightness(10), meta: c.lightness(20) };

  return (
    <div
      id="preview"
      className="text-base w-[300px] h-[156px] md:text-2xl md:w-[450px] md:h-[234px] lg:text-3xl lg:w-[600px] lg:h-[314px]"
      style={{ backgroundColor }}
    >
      <div className="flex flex-col justify-between h-full p-[0.8125em]">
        <div className="relative">
          <div
            className={`font-title ${fontStyle} line-clamp-2 overflow-ellipsis`}
            style={{ color: colors.title }}
          >
            {title}
          </div>
          {/* <div className="absolute inset-0 flex-none">
            <div className="font-title font-serif line-clamp-2 overflow-ellipsis text-gray-400">
              {title}
            </div>
            <div className="font-description font-sans line-clamp-3 text-gray-400">
              {description}
            </div>
          </div> */}
          <div
            className="font-description font-sans line-clamp-3"
            style={{ color: colors.meta }}
          >
            {description}
          </div>
        </div>
        <div
          className="flex font-meta font-sans"
          style={{ color: colors.meta }}
        >
          <div className="flex-1">{leftMeta}</div>
          <div className="flex-1 text-right">{rightMeta}</div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
