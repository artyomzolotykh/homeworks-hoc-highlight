import UpgradedArticle from "./UpgradedArticle";
import UpgradedVideo from "./UpgradedVideo";

function UpgradedList(props) {
  return props.list.map(item => {
      switch (item.type) {
          case 'video':
              return (
                  <UpgradedVideo {...item} />
              );

          case 'article':
              return (
                  <UpgradedArticle {...item} />
              );
      }
  });
};

export default UpgradedList;