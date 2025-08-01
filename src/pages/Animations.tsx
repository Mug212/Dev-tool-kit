import React from 'react';

const fadeInAnimationCode = String.raw`// CSS (e.g., App.css or a global CSS file)
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.fade-in {
  animation: fadeIn 1s ease-in-out forwards;
}

// React Component
// import React from 'react';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
}

const FadeIn: React.FC<FadeInProps> = ({ children, delay = 0 }) => {
  return (
    <div
      className="fade-in"
      style={{ animationDelay: `\\`${delay}s\\`` }}
    >
      {children}
    </div>
  );
};

// export default FadeIn;
`;

const slideInAnimationCode = String.raw`// CSS (e.g., App.css or a global CSS file)
@keyframes slideIn {
  from { transform: translateX(-100%); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}

.slide-in {
  animation: slideIn 0.8s ease-out forwards;
}

// React Component
// import React from 'react';

interface SlideInProps {
  children: React.ReactNode;
  delay?: number;
}

const SlideIn: React.FC<SlideInProps> = ({ children, delay = 0 }) => {
  return (
    <div
      className="slide-in"
      style={{ animationDelay: `\\`${delay}s\\`` }}
    >
      {children}
    </div>
  );
};

// export default SlideIn;
`;

const rotateAnimationCode = String.raw`// CSS (e.g., App.css or a global CSS file)
@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.rotate-animation {
  animation: rotate 2s linear infinite;
}

// React Component
// import React from 'react';

interface RotateProps {
  children: React.ReactNode;
}

const Rotate: React.FC<RotateProps> = ({ children }) => {
  return (
    <div className="rotate-animation">
      {children}
    </div>
  );
};

// export default Rotate;
`;

const scaleAnimationCode = String.raw`// CSS (e.g., App.css or a global CSS file)
@keyframes scale {
  from { opacity: 0; transform: scale(0.8); }
  to { opacity: 1; transform: scale(1); }
}

.scale-animation {
  animation: scale 0.6s ease-out forwards;
}

// React Component
// import React from 'react';

interface ScaleProps {
  children: React.ReactNode;
  delay?: number;
}

const Scale: React.FC<ScaleProps> = ({ children, delay = 0 }) => {
  return (
    <div
      className="scale-animation"
      style={{ animationDelay: `\\`${delay}s\\`` }}
    >
      {children}
    </div>
  );
};

// export default Scale;
`;

const pulseAnimationCode = String.raw`// CSS (e.g., App.css or a global CSS file)
@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
}

.pulse-animation {
  animation: pulse 1.5s infinite;
}

// React Component
// import React from 'react';

interface PulseProps {
  children: React.ReactNode;
}

const Pulse: React.FC<PulseProps> = ({ children }) => {
  return (
    <div className="pulse-animation">
      {children}
    </div>
  );
};

// export default Pulse;
`;

const flipAnimationCode = String.raw`// CSS (e.g., App.css or a global CSS file)
@keyframes flip {
  0% { transform: perspective(400px) rotateY(0); opacity: 0; }
  40% { transform: perspective(400px) rotateY(170deg); }
  50% { transform: perspective(400px) rotateY(190deg); opacity: 1; }
  80% { transform: perspective(400px) rotateY(180deg); }
  100% { transform: perspective(400px) rotateY(180deg); opacity: 1; }
}

.flip-animation {
  animation: flip 1.5s forwards;
  backface-visibility: visible;
}

// React Component
// import React from 'react';

interface FlipProps {
  children: React.ReactNode;
}

const Flip: React.FC<FlipProps> = ({ children }) => {
  return (
    <div className="flip-animation">
      {children}
    </div>
  );
};

// export default Flip;
`;

const shakeAnimationCode = String.raw`// CSS (e.g., App.css or a global CSS file)
@keyframes shake {
  0%, 100% { transform: translateX(0); }
  10%, 30%, 50%, 70%, 90% { transform: translateX(-10px); }
  20%, 40%, 60%, 80% { transform: translateX(10px); }
}

.shake-animation {
  animation: shake 0.8s cubic-bezier(.36,.07,.19,.97) both;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
}

// React Component
// import React from 'react';

interface ShakeProps {
  children: React.ReactNode;
}

const Shake: React.FC<ShakeProps> = ({ children }) => {
  return (
    <div className="shake-animation">
      {children}
    </div>
  );
};

// export default Shake;
`;

const wobbleAnimationCode = String.raw`// CSS (e.g., App.css or a global CSS file)
@keyframes wobble {
  0% { transform: translateX(0%); }
  15% { transform: translateX(-25%) rotate(-5deg); }
  30% { transform: translateX(20%) rotate(3deg); }
  45% { transform: translateX(-15%) rotate(-3deg); }
  60% { transform: translateX(10%) rotate(2deg); }
  75% { transform: translateX(-5%) rotate(-1deg); }
  100% { transform: translateX(0%); }
}

.wobble-animation {
  animation: wobble 1s ease-in-out;
}

// React Component
// import React from 'react';

interface WobbleProps {
  children: React.ReactNode;
}

const Wobble: React.FC<WobbleProps> = ({ children }) => {
  return (
    <div className="wobble-animation">
      {children}
    </div>
  );
};

// export default Wobble;
`;

const zoomInAnimationCode = String.raw`// CSS (e.g., App.css or a global CSS file)
@keyframes zoomIn {
  from { opacity: 0; transform: scale3d(.3, .3, .3); }
  50% { opacity: 1; }
}

.zoom-in {
  animation: zoomIn 0.6s ease-out forwards;
}

// React Component
// import React from 'react';

interface ZoomInProps {
  children: React.ReactNode;
  delay?: number;
}

const ZoomIn: React.FC<ZoomInProps> = ({ children, delay = 0 }) => {
  return (
    <div
      className="zoom-in"
      style={{ animationDelay: `\\`${delay}s\\`` }}
    >
      {children}
    </div>
  );
};

// export default ZoomIn;
`;

const lightSpeedInAnimationCode = String.raw`// CSS (e.g., App.css or a global CSS file)
@keyframes lightSpeedIn {
  from {
    transform: translate3d(100%, 0, 0) skewX(-30deg);
    opacity: 0;
  }
  60% {
    transform: skewX(20deg);
    opacity: 1;
  }
  80% {
    transform: skewX(-5deg);
  }
  to {
    transform: translate3d(0, 0, 0);
  }
}

.lightspeed-in {
  animation: lightSpeedIn 1s ease-out forwards;
}

// React Component
// import React from 'react';

interface LightSpeedInProps {
  children: React.ReactNode;
}

const LightSpeedIn: React.FC<LightSpeedInProps> = ({ children }) => {
  return (
    <div className="lightspeed-in">
      {children}
    </div>
  );
};

// export default LightSpeedIn;
`;

const rollInAnimationCode = String.raw`// CSS (e.g., App.css or a global CSS file)
@keyframes rollIn {
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

.roll-in {
  animation: rollIn 0.8s ease-out forwards;
}

// React Component
// import React from 'react';

interface RollInProps {
  children: React.ReactNode;
}

const RollIn: React.FC<RollInProps> = ({ children }) => {
  return (
    <div className="roll-in">
      {children}
    </div>
  );
};

// export default RollIn;
`;

const hingeAnimationCode = String.raw`// CSS (e.g., App.css or a global CSS file)
@keyframes hinge {
  0% { transform-origin: top left; animation-timing-function: ease-in-out; }
  20%, 60% { transform: rotate3d(0, 0, 1, 80deg); transform-origin: top left; animation-timing-function: ease-in-out; }
  40%, 80% { transform: rotate3d(0, 0, 1, 60deg); transform-origin: top left; animation-timing-function: ease-in-out; opacity: 1; }
  100% { transform: translate3d(0, 700px, 0); opacity: 0; }
}

.hinge-animation {
  animation: hinge 2s forwards;
}

// React Component
// import React from 'react';

interface HingeProps {
  children: React.ReactNode;
}

const Hinge: React.FC<HingeProps> = ({ children }) => {
  return (
    <div className="hinge-animation">
      {children}
    </div>
  );
};

// export default Hinge;
`;

const rubberBandAnimationCode = String.raw`// CSS (e.g., App.css or a global CSS file)
@keyframes rubberBand {
  0% { transform: scale3d(1, 1, 1); }
  30% { transform: scale3d(1.25, 0.75, 1); }
  40% { transform: scale3d(0.75, 1.25, 1); }
  50% { transform: scale3d(1.15, 0.85, 1); }
  65% { transform: scale3d(0.95, 1.05, 1); }
  75% { transform: scale3d(1.05, 0.95, 1); }
  100% { transform: scale3d(1, 1, 1); }
}

.rubberband-animation {
  animation: rubberBand 1s forwards;
}

// React Component
// import React from 'react';

interface RubberBandProps {
  children: React.ReactNode;
}

const RubberBand: React.FC<RubberBandProps> = ({ children }) => {
  return (
    <div className="rubberband-animation">
      {children}
    </div>
  );
};

// export default RubberBand;
`;

const flashAnimationCode = String.raw`// CSS (e.g., App.css or a global CSS file)
@keyframes flash {
  0%, 50%, 100% { opacity: 1; }
  25%, 75% { opacity: 0; }
}

.flash-animation {
  animation: flash 1s forwards;
}

// React Component
// import React from 'react';

interface FlashProps {
  children: React.ReactNode;
}

const Flash: React.FC<FlashProps> = ({ children }) => {
  return (
    <div className="flash-animation">
      {children}
    </div>
  );
};

// export default Flash;
`;

const jelloAnimationCode = String.raw`// CSS (e.g., App.css or a global CSS file)
@keyframes jello {
  0%, 100% { transform: translate3d(0, 0, 0); }
  11.1% { transform: translate3d(0, 0, 0); }
  22.2% { transform: skewX(-12.5deg) skewY(-12.5deg); }
  33.3% { transform: skewX(6.25deg) skewY(6.25deg); }
  44.4% { transform: skewX(-3.125deg) skewY(-3.125deg); }
  55.5% { transform: skewX(1.5625deg) skewY(1.5625deg); }
  66.6% { transform: skewX(-0.78125deg) skewY(-0.78125deg); }
  77.7% { transform: skewX(0.390625deg) skewY(0.390625deg); }
  88.8% { transform: skewX(-0.1953125deg) skewY(-0.1953125deg); }
}

.jello-animation {
  animation: jello 1s forwards;
}

// React Component
// import React from 'react';

interface JelloProps {
  children: React.ReactNode;
}

const Jello: React.FC<JelloProps> = ({ children }) => {
  return (
    <div className="jello-animation">
      {children}
    </div>
  );
};

// export default Jello;
`;

const tadaAnimationCode = String.raw`// CSS (e.g., App.css or a global CSS file)
@keyframes tada {
  from {
    transform: scale3d(1, 1, 1);
  }
  10%, 20% {
    transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg);
  }
  30%, 50%, 70%, 90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }
  40%, 60%, 80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }
  to {
    transform: scale3d(1, 1, 1);
  }
}

.tada-animation {
  animation: tada 1s forwards;
}

// React Component
// import React from 'react';

interface TadaProps {
  children: React.ReactNode;
}

const Tada: React.FC<TadaProps> = ({ children }) => {
  return (
    <div className="tada-animation">
      {children}
    </div>
  );
};

// export default Tada;
`;

const swingAnimationCode = String.raw`// CSS (e.g., App.css or a global CSS file)
@keyframes swing {
  20% { transform: rotate3d(0, 0, 1, 15deg); }
  40% { transform: rotate3d(0, 0, 1, -10deg); }
  60% { transform: rotate3d(0, 0, 1, 5deg); }
  80% { transform: rotate3d(0, 0, 1, -5deg); }
  100% { transform: rotate3d(0, 0, 1, 0deg); }
}

.swing-animation {
  transform-origin: top center;
  animation: swing 1s ease-in-out forwards;
}

// React Component
// import React from 'react';

interface SwingProps {
  children: React.ReactNode;
}

const Swing: React.FC<SwingProps> = ({ children }) => {
  return (
    <div className="swing-animation">
      {children}
    </div>
  );
};

// export default Swing;
`;

const zoomOutAnimationCode = String.raw`// CSS (e.g., App.css or a global CSS file)
@keyframes zoomOut {
  from { opacity: 1; }
  50% { opacity: 0; transform: scale3d(.3, .3, .3); }
  to { opacity: 0; }
}

.zoom-out {
  animation: zoomOut 0.6s ease-out forwards;
}

// React Component
// import React from 'react';

interface ZoomOutProps {
  children: React.ReactNode;
  delay?: number;
}

const ZoomOut: React.FC<ZoomOutProps> = ({ children, delay = 0 }) => {
  return (
    <div
      className="zoom-out"
      style={{ animationDelay: `\\`${delay}s\\`` }}
    >
      {children}
    </div>
  );
};

// export default ZoomOut;
`;

const lightSpeedOutAnimationCode = String.raw`// CSS (e.g., App.css or a global CSS file)
@keyframes lightSpeedOut {
  from {
    opacity: 1;
  }
  to {
    transform: translate3d(100%, 0, 0) skewX(30deg);
    opacity: 0;
  }
}

.lightspeed-out {
  animation: lightSpeedOut 1s ease-in forwards;
}

// React Component
// import React from 'react';

interface LightSpeedOutProps {
  children: React.ReactNode;
}

const LightSpeedOut: React.FC<LightSpeedOutProps> = ({ children }) => {
  return (
    <div className="lightspeed-out">
      {children}
    </div>
  );
};

// export default LightSpeedOut;
`;

const bounceAnimationCode = String.raw`// CSS (e.g., App.css or a global CSS file)
@keyframes bounce {
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-30px); }
  60% { transform: translateY(-15px); }
}

.bounce-animation {
  animation: bounce 2s infinite;
}

// React Component
// import React from 'react';

interface BounceProps {
  children: React.ReactNode;
}

const Bounce: React.FC<BounceProps> = ({ children }) => {
  return (
    <div className="bounce-animation">
      {children}
    </div>
  );
};

// export default Bounce;
`;

const Animations = () => {
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-4xl font-bold mb-8">Animations</h1>
      <p className="text-muted-foreground mb-12">Explore and copy-paste ready-to-use animations.</p>

      <div className="grid grid-cols-1 gap-8">
        {/* Fade In Animation */}
        <div className="bg-card p-6 rounded-lg border border-border shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Fade In</h2>
          <p className="text-muted-foreground mb-4">A simple fade-in animation for elements.</p>
          <div className="bg-gray-900 rounded-md p-4 mb-4 overflow-x-auto">
            <pre>
              <code className="language-css text-white"
                dangerouslySetInnerHTML={{ __html: fadeInAnimationCode }}>
              </code>
            </pre>
          </div>
          <button 
            className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
            onClick={() => navigator.clipboard.writeText(fadeInAnimationCode)}
          >
            Copy Code
          </button>
          <div className="mt-6 p-4 border border-dashed border-muted-foreground rounded-md text-center">
            <div className="fade-in text-lg font-medium">Fade In Example</div>
          </div>
        </div>

        {/* Slide In Animation */}
        <div className="bg-card p-6 rounded-lg border border-border shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Slide In</h2>
          <p className="text-muted-foreground mb-4">An animation that slides elements in from the left.</p>
          <div className="bg-gray-900 rounded-md p-4 mb-4 overflow-x-auto">
            <pre>
              <code className="language-css text-white"
                dangerouslySetInnerHTML={{ __html: slideInAnimationCode }}>
              </code>
            </pre>
          </div>
          <button 
            className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
            onClick={() => navigator.clipboard.writeText(slideInAnimationCode)}
          >
            Copy Code
          </button>
          <div className="mt-6 p-4 border border-dashed border-muted-foreground rounded-md text-center">
            <div className="slide-in text-lg font-medium">Slide In Example</div>
          </div>
        </div>

        {/* Rotate Animation */}
        <div className="bg-card p-6 rounded-lg border border-border shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Rotate</h2>
          <p className="text-muted-foreground mb-4">A continuous rotation animation.</p>
          <div className="bg-gray-900 rounded-md p-4 mb-4 overflow-x-auto">
            <pre>
              <code className="language-css text-white"
                dangerouslySetInnerHTML={{ __html: rotateAnimationCode }}>
              </code>
            </pre>
          </div>
          <button 
            className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
            onClick={() => navigator.clipboard.writeText(rotateAnimationCode)}
          >
            Copy Code
          </button>
          <div className="mt-6 p-4 border border-dashed border-muted-foreground rounded-md text-center">
            <div className="rotate-animation text-lg font-medium">Rotate Example</div>
          </div>
        </div>

        {/* Scale Animation */}
        <div className="bg-card p-6 rounded-lg border border-border shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Scale</h2>
          <p className="text-muted-foreground mb-4">An animation that scales elements in.</p>
          <div className="bg-gray-900 rounded-md p-4 mb-4 overflow-x-auto">
            <pre>
              <code className="language-css text-white"
                dangerouslySetInnerHTML={{ __html: scaleAnimationCode }}>
              </code>
            </pre>
          </div>
          <button 
            className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
            onClick={() => navigator.clipboard.writeText(scaleAnimationCode)}
          >
            Copy Code
          </button>
          <div className="mt-6 p-4 border border-dashed border-muted-foreground rounded-md text-center">
            <div className="scale-animation text-lg font-medium">Scale Example</div>
          </div>
        </div>

        {/* Pulse Animation */}
        <div className="bg-card p-6 rounded-lg border border-border shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Pulse</h2>
          <p className="text-muted-foreground mb-4">A subtle pulsing animation.</p>
          <div className="bg-gray-900 rounded-md p-4 mb-4 overflow-x-auto">
            <pre>
              <code className="language-css text-white"
                dangerouslySetInnerHTML={{ __html: pulseAnimationCode }}>
              </code>
            </pre>
          </div>
          <button 
            className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
            onClick={() => navigator.clipboard.writeText(pulseAnimationCode)}
          >
            Copy Code
          </button>
          <div className="mt-6 p-4 border border-dashed border-muted-foreground rounded-md text-center">
            <div className="pulse-animation text-lg font-medium">Pulse Example</div>
          </div>
        </div>

        {/* Flip Animation */}
        <div className="bg-card p-6 rounded-lg border border-border shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Flip</h2>
          <p className="text-muted-foreground mb-4">A 3D flip animation.</p>
          <div className="bg-gray-900 rounded-md p-4 mb-4 overflow-x-auto">
            <pre>
              <code className="language-css text-white"
                dangerouslySetInnerHTML={{ __html: flipAnimationCode }}>
              </code>
            </pre>
          </div>
          <button 
            className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
            onClick={() => navigator.clipboard.writeText(flipAnimationCode)}
          >
            Copy Code
          </button>
          <div className="mt-6 p-4 border border-dashed border-muted-foreground rounded-md text-center">
            <div className="flip-animation text-lg font-medium">Flip Example</div>
          </div>
        </div>

        {/* Shake Animation */}
        <div className="bg-card p-6 rounded-lg border border-border shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Shake</h2>
          <p className="text-muted-foreground mb-4">A shaking animation, useful for error feedback.</p>
          <div className="bg-gray-900 rounded-md p-4 mb-4 overflow-x-auto">
            <pre>
              <code className="language-css text-white"
                dangerouslySetInnerHTML={{ __html: shakeAnimationCode }}>
              </code>
            </pre>
          </div>
          <button 
            className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
            onClick={() => navigator.clipboard.writeText(shakeAnimationCode)}
          >
            Copy Code
          </button>
          <div className="mt-6 p-4 border border-dashed border-muted-foreground rounded-md text-center">
            <div className="shake-animation text-lg font-medium">Shake Example</div>
          </div>
        </div>

        {/* Wobble Animation */}
        <div className="bg-card p-6 rounded-lg border border-border shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Wobble</h2>
          <p className="text-muted-foreground mb-4">A wobbling animation effect.</p>
          <div className="bg-gray-900 rounded-md p-4 mb-4 overflow-x-auto">
            <pre>
              <code className="language-css text-white"
                dangerouslySetInnerHTML={{ __html: wobbleAnimationCode }}>
              </code>
            </pre>
          </div>
          <button 
            className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
            onClick={() => navigator.clipboard.writeText(wobbleAnimationCode)}
          >
            Copy Code
          </button>
          <div className="mt-6 p-4 border border-dashed border-muted-foreground rounded-md text-center">
            <div className="wobble-animation text-lg font-medium">Wobble Example</div>
          </div>
        </div>

        {/* Zoom In Animation */}
        <div className="bg-card p-6 rounded-lg border border-border shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Zoom In</h2>
          <p className="text-muted-foreground mb-4">A zoom-in animation effect.</p>
          <div className="bg-gray-900 rounded-md p-4 mb-4 overflow-x-auto">
            <pre>
              <code className="language-css text-white"
                dangerouslySetInnerHTML={{ __html: zoomInAnimationCode }}>
              </code>
            </pre>
          </div>
          <button 
            className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
            onClick={() => navigator.clipboard.writeText(zoomInAnimationCode)}
          >
            Copy Code
          </button>
          <div className="mt-6 p-4 border border-dashed border-muted-foreground rounded-md text-center">
            <div className="zoom-in text-lg font-medium">Zoom In Example</div>
          </div>
        </div>

        {/* Light Speed In Animation */}
        <div className="bg-card p-6 rounded-lg border border-border shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Light Speed In</h2>
          <p className="text-muted-foreground mb-4">An animation that slides in quickly like a light speed effect.</p>
          <div className="bg-gray-900 rounded-md p-4 mb-4 overflow-x-auto">
            <pre>
              <code className="language-css text-white"
                dangerouslySetInnerHTML={{ __html: lightSpeedInAnimationCode }}>
              </code>
            </pre>
          </div>
          <button 
            className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
            onClick={() => navigator.clipboard.writeText(lightSpeedInAnimationCode)}
          >
            Copy Code
          </button>
          <div className="mt-6 p-4 border border-dashed border-muted-foreground rounded-md text-center">
            <div className="lightspeed-in text-lg font-medium">Light Speed In Example</div>
          </div>
        </div>

        {/* Roll In Animation */}
        <div className="bg-card p-6 rounded-lg border border-border shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Roll In</h2>
          <p className="text-muted-foreground mb-4">An animation that rolls in from the left.</p>
          <div className="bg-gray-900 rounded-md p-4 mb-4 overflow-x-auto">
            <pre>
              <code className="language-css text-white"
                dangerouslySetInnerHTML={{ __html: rollInAnimationCode }}>
              </code>
            </pre>
          </div>
          <button 
            className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
            onClick={() => navigator.clipboard.writeText(rollInAnimationCode)}
          >
            Copy Code
          </button>
          <div className="mt-6 p-4 border border-dashed border-muted-foreground rounded-md text-center">
            <div className="roll-in text-lg font-medium">Roll In Example</div>
          </div>
        </div>

        {/* Hinge Animation */}
        <div className="bg-card p-6 rounded-lg border border-border shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Hinge</h2>
          <p className="text-muted-foreground mb-4">An animation that swings an element like a hinge.</p>
          <div className="bg-gray-900 rounded-md p-4 mb-4 overflow-x-auto">
            <pre>
              <code className="language-css text-white"
                dangerouslySetInnerHTML={{ __html: hingeAnimationCode }}>
              </code>
            </pre>
          </div>
          <button 
            className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
            onClick={() => navigator.clipboard.writeText(hingeAnimationCode)}
          >
            Copy Code
          </button>
          <div className="mt-6 p-4 border border-dashed border-muted-foreground rounded-md text-center">
            <div className="hinge-animation text-lg font-medium">Hinge Example</div>
          </div>
        </div>

        {/* Rubber Band Animation */}
        <div className="bg-card p-6 rounded-lg border border-border shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Rubber Band</h2>
          <p className="text-muted-foreground mb-4">A rubber band effect animation.</p>
          <div className="bg-gray-900 rounded-md p-4 mb-4 overflow-x-auto">
            <pre>
              <code className="language-css text-white"
                dangerouslySetInnerHTML={{ __html: rubberBandAnimationCode }}>
              </code>
            </pre>
          </div>
          <button 
            className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
            onClick={() => navigator.clipboard.writeText(rubberBandAnimationCode)}
          >
            Copy Code
          </button>
          <div className="mt-6 p-4 border border-dashed border-muted-foreground rounded-md text-center">
            <div className="rubberband-animation text-lg font-medium">Rubber Band Example</div>
          </div>
        </div>

        {/* Flash Animation */}
        <div className="bg-card p-6 rounded-lg border border-border shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Flash</h2>
          <p className="text-muted-foreground mb-4">A quick flash effect.</p>
          <div className="bg-gray-900 rounded-md p-4 mb-4 overflow-x-auto">
            <pre>
              <code className="language-css text-white"
                dangerouslySetInnerHTML={{ __html: flashAnimationCode }}>
              </code>
            </pre>
          </div>
          <button 
            className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
            onClick={() => navigator.clipboard.writeText(flashAnimationCode)}
          >
            Copy Code
          </button>
          <div className="mt-6 p-4 border border-dashed border-muted-foreground rounded-md text-center">
            <div className="flash-animation text-lg font-medium">Flash Example</div>
          </div>
        </div>

        {/* Jello Animation */}
        <div className="bg-card p-6 rounded-lg border border-border shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Jello</h2>
          <p className="text-muted-foreground mb-4">A jello-like wobbling animation.</p>
          <div className="bg-gray-900 rounded-md p-4 mb-4 overflow-x-auto">
            <pre>
              <code className="language-css text-white"
                dangerouslySetInnerHTML={{ __html: jelloAnimationCode }}>
              </code>
            </pre>
          </div>
          <button 
            className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
            onClick={() => navigator.clipboard.writeText(jelloAnimationCode)}
          >
            Copy Code
          </button>
          <div className="mt-6 p-4 border border-dashed border-muted-foreground rounded-md text-center">
            <div className="jello-animation text-lg font-medium">Jello Example</div>
          </div>
        </div>

        {/* Tada Animation */}
        <div className="bg-card p-6 rounded-lg border border-border shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Tada</h2>
          <p className="text-muted-foreground mb-4">A fun, emphatic animation.</p>
          <div className="bg-gray-900 rounded-md p-4 mb-4 overflow-x-auto">
            <pre>
              <code className="language-css text-white"
                dangerouslySetInnerHTML={{ __html: tadaAnimationCode }}>
              </code>
            </pre>
          </div>
          <button 
            className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
            onClick={() => navigator.clipboard.writeText(tadaAnimationCode)}
          >
            Copy Code
          </button>
          <div className="mt-6 p-4 border border-dashed border-muted-foreground rounded-md text-center">
            <div className="tada-animation text-lg font-medium">Tada Example</div>
          </div>
        </div>

        {/* Swing Animation */}
        <div className="bg-card p-6 rounded-lg border border-border shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Swing</h2>
          <p className="text-muted-foreground mb-4">A swinging animation effect.</p>
          <div className="bg-gray-900 rounded-md p-4 mb-4 overflow-x-auto">
            <pre>
              <code className="language-css text-white"
                dangerouslySetInnerHTML={{ __html: swingAnimationCode }}>
              </code>
            </pre>
          </div>
          <button 
            className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
            onClick={() => navigator.clipboard.writeText(swingAnimationCode)}
          >
            Copy Code
          </button>
          <div className="mt-6 p-4 border border-dashed border-muted-foreground rounded-md text-center">
            <div className="swing-animation text-lg font-medium">Swing Example</div>
          </div>
        </div>

        {/* Zoom Out Animation */}
        <div className="bg-card p-6 rounded-lg border border-border shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Zoom Out</h2>
          <p className="text-muted-foreground mb-4">A zoom-out animation effect.</p>
          <div className="bg-gray-900 rounded-md p-4 mb-4 overflow-x-auto">
            <pre>
              <code className="language-css text-white"
                dangerouslySetInnerHTML={{ __html: zoomOutAnimationCode }}>
              </code>
            </pre>
          </div>
          <button 
            className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
            onClick={() => navigator.clipboard.writeText(zoomOutAnimationCode)}
          >
            Copy Code
          </button>
          <div className="mt-6 p-4 border border-dashed border-muted-foreground rounded-md text-center">
            <div className="zoom-out text-lg font-medium">Zoom Out Example</div>
          </div>
        </div>

        {/* Light Speed Out Animation */}
        <div className="bg-card p-6 rounded-lg border border-border shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Light Speed Out</h2>
          <p className="text-muted-foreground mb-4">An animation that slides out quickly like a light speed effect.</p>
          <div className="bg-gray-900 rounded-md p-4 mb-4 overflow-x-auto">
            <pre>
              <code className="language-css text-white"
                dangerouslySetInnerHTML={{ __html: lightSpeedOutAnimationCode }}>
              </code>
            </pre>
          </div>
          <button 
            className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
            onClick={() => navigator.clipboard.writeText(lightSpeedOutAnimationCode)}
          >
            Copy Code
          </button>
          <div className="mt-6 p-4 border border-dashed border-muted-foreground rounded-md text-center">
            <div className="lightspeed-out text-lg font-medium">Light Speed Out Example</div>
          </div>
        </div>

        {/* Bounce Animation */}
        <div className="bg-card p-6 rounded-lg border border-border shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Bounce</h2>
          <p className="text-muted-foreground mb-4">A classic bouncing animation.</p>
          <div className="bg-gray-900 rounded-md p-4 mb-4 overflow-x-auto">
            <pre>
              <code className="language-css text-white"
                dangerouslySetInnerHTML={{ __html: bounceAnimationCode }}>
              </code>
            </pre>
          </div>
          <button 
            className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
            onClick={() => navigator.clipboard.writeText(bounceAnimationCode)}
          >
            Copy Code
          </button>
          <div className="mt-6 p-4 border border-dashed border-muted-foreground rounded-md text-center">
            <div className="bounce-animation inline-block p-2 bg-primary rounded-md text-white">Bounce Example</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Animations; 