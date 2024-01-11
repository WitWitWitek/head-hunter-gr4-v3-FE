import styles from "./CvLabelWithLinks.module.scss";

import ProjectLink from "./ProjectLink";

interface Props {
  urlList: string[] | null;
  title: string;
}

const CvLabelWithLinks = (props: Props) => {
  return (
    <>
      <p className={styles.title}>{props.title}</p>
      <div className={styles.labelWithLinks}>
        {props.urlList === null ||
        props.urlList.length === 0 ||
        props.urlList.every((el) => el === "") ? (
          <p>Osoba nie posiada strony www z portfolio.</p>
        ) : (
          props.urlList.map((element, index) => {
            return <ProjectLink link={element} key={index} />;
          })
        )}
      </div>
    </>
  );
  // }
};

export default CvLabelWithLinks;
