export const renderGlobalPresenceBannerTitle = (titleLines = []) =>
  titleLines.map((line, index) => (
    <span key={line}>
      {line}
      {index < titleLines.length - 1 ? <br /> : null}
    </span>
  ));
