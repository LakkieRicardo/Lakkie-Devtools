import './style.scss';

const Logo = (props) => (
    <svg className={props.className + " ln-logo"} viewBox="0 0 640 256" width={props.width} height={props.height} style={{userSelect: "none"}} xmlns="http://www.w3.org/2000/svg">
        <text x="132" y="96" dominantBaseline="middle" textAnchor="middle" style={{fontSize: "192px"}} stroke="white" fill="white">L</text>
        <text x="390" y="127" dominantBaseline="middle" textAnchor="middle" style={{fontSize: "64px"}} stroke="white" fill="white" id="ln-logo-extra-text">akkie.net</text>
        <path style={{fill: "none", stroke: "white", strokeWidth: "6px"}} className="animated-website-logo" d="M 133.792 61.059 C 188.232 61.059 222.258 119.992 195.038 167.139 C 167.817 214.285 99.767 214.285 72.547 167.139 C 55.935 138.366 61.591 101.91 86.14 79.524"></path>
    </svg>
);

export default Logo;