import Circle from "./Circle";
import ContentsBanner from "./ContentsBanner";
import MainContent from "./MainContent";

const ContentsList = () => {
  return (
    <div className="contents-list">
      <Circle />
      <ContentsBanner />
      <MainContent />
    </div>
  );
};

export default ContentsList;
