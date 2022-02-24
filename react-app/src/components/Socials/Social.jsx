import localStyles from "./Socials.css";

const Social = (props) => {
  console.log(`social${props.info.id}`);
  return (
    <button id={`social${props.info.id}`} className={(props.info.id, props.info.noLink ? "social-tab" : "social-tab cursor-pointer")} onClick={() => (props.info.noLink ? null : window.open(props.info.link, "_blank"))}>
      <div className='line'></div>
      <div className='social-tab-background'>
        <img className='social-icon' src={props.info.src} />
        <div className='social-text'>
          <h1 className='social-top-text'>{props.info.topText}</h1>
          <h3 className='social-bottom-text'>{props.info.bottomText}</h3>
        </div>
      </div>
    </button>
  );
};

export default Social;
