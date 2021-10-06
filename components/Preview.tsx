const Preview = ({
  title,
  description,
  fontStyle,
  backgroundColor,
  leftMeta,
  rightMeta,
}) => {
  return (
    <div
      // id="preview"
      className="text-base w-[300px] h-[156px] md:text-2xl md:w-[450px] md:h-[234px] lg:text-3xl lg:w-[600px] lg:h-[314px]"
      style={{ backgroundColor }}
    >
      <div className="flex flex-col justify-between h-full p-[0.8125em]">
        <div className="relative">
          <div
            key="title"
            className={`font-title ${fontStyle} line-clamp-2 overflow-ellipsis text-white`}
          >
            {title}
          </div>
          {/* <div
            key="title-shadow"
            className="absolute inset-0 flex-none font-title font-serif line-clamp-2 overflow-ellipsis text-gray-400"
          >
            {title}
          </div> */}
          <div
            key="description"
            className="font-description font-sans line-clamp-3 pt-[0.375em] text-gray-200"
          >
            {description}
          </div>
        </div>
        <div className="flex font-meta font-sans text-gray-200">
          <div className="flex-1">{leftMeta}</div>
          <div className="flex-1 text-right">{rightMeta}</div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
