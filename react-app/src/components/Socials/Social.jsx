import localStyles from "./Socials.css";
import styles from "../../styles.css";
const Social = (props) => {
  return (
    <div id={`social${props.info.id}`} className={`social-tab ${(props.info.id, props.info.noLink ? null : "cursor-pointer")}`} onClick={() => (props.info.noLink ? null : window.open(props.info.link, "_blank"))}>
      <div className='line'></div>
      <div className='social-tab-background'>
        <img className='social-icon' src={props.info.src} />
        <div className='social-text'>
          <h1 className='social-top-text'>
            {props.info.topText}
            <button
              className={`social-copy img-fix ${props.info.noLink ? "shown" : "hidden"}`}
              onClick={() => {
                navigator.clipboard.writeText(props.info.topText);
              }}
            />
          </h1>
          <h3 className='social-bottom-text'>{props.info.bottomText}</h3>
        </div>
      </div>
    </div>
  );
};

export default Social;
