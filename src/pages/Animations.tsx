import React, { useEffect, useState } from 'react';

// --- Animation Code Snippets for Display & Copying ---
const fadeInAnimationCode = String.raw`// CSS
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
.fade-in { animation: fadeIn 1s ease-in-out forwards; }

// React Component
const FadeIn = ({ children, delay = 0 }) => <div className="fade-in" style={{ animationDelay: \`\${delay}s\` }}>{children}</div>;`;

const slideInAnimationCode = String.raw`// CSS
@keyframes slideIn { from { transform: translateX(-100%); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
.slide-in { animation: slideIn 0.8s ease-out forwards; }

// React Component
const SlideIn = ({ children, delay = 0 }) => <div className="slide-in" style={{ animationDelay: \`\${delay}s\` }}>{children}</div>;`;

const rotateAnimationCode = String.raw`// CSS
@keyframes rotate { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
.rotate-animation { animation: rotate 2s linear infinite; display: inline-block; }

// React Component
const Rotate = ({ children }) => <div className="rotate-animation">{children}</div>;`;

const scaleAnimationCode = String.raw`// CSS
@keyframes scale { from { opacity: 0; transform: scale(0.8); } to { opacity: 1; transform: scale(1); } }
.scale-animation { animation: scale 0.6s ease-out forwards; }

// React Component
const Scale = ({ children, delay = 0 }) => <div className="scale-animation" style={{ animationDelay: \`\${delay}s\` }}>{children}</div>;`;

const pulseAnimationCode = String.raw`// CSS
@keyframes pulse { 0% { transform: scale(1); } 50% { transform: scale(1.05); } 100% { transform: scale(1); } }
.pulse-animation { animation: pulse 1.5s infinite; display: inline-block; }

// React Component
const Pulse = ({ children }) => <div className="pulse-animation">{children}</div>;`;

const flipAnimationCode = String.raw`// CSS
@keyframes flip { from { transform: perspective(400px) rotateY(90deg); opacity: 0; } to { transform: perspective(400px) rotateY(0); opacity: 1; } }
.flip-animation { animation: flip 1s ease-out forwards; backface-visibility: visible; display: inline-block; }

// React Component
const Flip = ({ children }) => <div className="flip-animation">{children}</div>;`;

const shakeAnimationCode = String.raw`// CSS
@keyframes shake { 0%, 100% { transform: translateX(0); } 10%, 30%, 50%, 70%, 90% { transform: translateX(-10px); } 20%, 40%, 60%, 80% { transform: translateX(10px); } }
.shake-animation { animation: shake 0.8s cubic-bezier(.36,.07,.19,.97) both; }

// React Component
const Shake = ({ children }) => <div className="shake-animation">{children}</div>;`;

const bounceAnimationCode = String.raw`// CSS
@keyframes bounce { 0%, 20%, 50%, 80%, 100% { transform: translateY(0); } 40% { transform: translateY(-30px); } 60% { transform: translateY(-15px); } }
.bounce-animation { animation: bounce 2s infinite; display: inline-block; }

// React Component
const Bounce = ({ children }) => <div className="bounce-animation">{children}</div>;`;

const wobbleAnimationCode = String.raw`// CSS
@keyframes wobble { 0% { transform: translateX(0%); } 15% { transform: translateX(-25%) rotate(-5deg); } 30% { transform: translateX(20%) rotate(3deg); } 45% { transform: translateX(-15%) rotate(-3deg); } 60% { transform: translateX(10%) rotate(2deg); } 75% { transform: translateX(-5%) rotate(-1deg); } 100% { transform: translateX(0%); } }
.wobble-animation { animation: wobble 1s ease-in-out; }

// React Component
const Wobble = ({ children }) => <div className="wobble-animation">{children}</div>;`;

const zoomInAnimationCode = String.raw`// CSS
@keyframes zoomIn { from { opacity: 0; transform: scale3d(.3, .3, .3); } 50% { opacity: 1; } }
.zoom-in { animation: zoomIn 0.6s ease-out forwards; }

// React Component
const ZoomIn = ({ children, delay = 0 }) => <div className="zoom-in" style={{ animationDelay: \`\${delay}s\` }}>{children}</div>;`;

const lightSpeedInAnimationCode = String.raw`// CSS
@keyframes lightSpeedIn { from { transform: translate3d(100%, 0, 0) skewX(-30deg); opacity: 0; } 60% { transform: skewX(20deg); opacity: 1; } 80% { transform: skewX(-5deg); } to { transform: translate3d(0, 0, 0); } }
.lightspeed-in { animation: lightSpeedIn 1s ease-out forwards; }

// React Component
const LightSpeedIn = ({ children }) => <div className="lightspeed-in">{children}</div>;`;

const rollInAnimationCode = String.raw`// CSS
@keyframes rollIn { from { opacity: 0; transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg); } to { opacity: 1; transform: translate3d(0, 0, 0); } }
.roll-in { animation: rollIn 0.8s ease-out forwards; }

// React Component
const RollIn = ({ children }) => <div className="roll-in">{children}</div>;`;

const hingeAnimationCode = String.raw`// CSS
@keyframes hinge { 0% { transform-origin: top left; animation-timing-function: ease-in-out; } 20%, 60% { transform: rotate3d(0, 0, 1, 80deg); transform-origin: top left; animation-timing-function: ease-in-out; } 40%, 80% { transform: rotate3d(0, 0, 1, 60deg); transform-origin: top left; animation-timing-function: ease-in-out; opacity: 1; } 100% { transform: translate3d(0, 700px, 0); opacity: 0; } }
.hinge-animation { animation: hinge 2s forwards; }

// React Component
const Hinge = ({ children }) => <div className="hinge-animation">{children}</div>;`;

const rubberBandAnimationCode = String.raw`// CSS
@keyframes rubberBand { 0% { transform: scale3d(1, 1, 1); } 30% { transform: scale3d(1.25, 0.75, 1); } 40% { transform: scale3d(0.75, 1.25, 1); } 50% { transform: scale3d(1.15, 0.85, 1); } 65% { transform: scale3d(.95, 1.05, 1); } 75% { transform: scale3d(1.05, .95, 1); } 100% { transform: scale3d(1, 1, 1); } }
.rubberband-animation { animation: rubberBand 1s forwards; }

// React Component
const RubberBand = ({ children }) => <div className="rubberband-animation">{children}</div>;`;

const flashAnimationCode = String.raw`// CSS
@keyframes flash { 0%, 50%, 100% { opacity: 1; } 25%, 75% { opacity: 0; } }
.flash-animation { animation: flash 1s forwards; }

// React Component
const Flash = ({ children }) => <div className="flash-animation">{children}</div>;`;

const jelloAnimationCode = String.raw`// CSS
@keyframes jello { 0%, 11.1%, 100% { transform: none; } 22.2% { transform: skewX(-12.5deg) skewY(-12.5deg); } 33.3% { transform: skewX(6.25deg) skewY(6.25deg); } 44.4% { transform: skewX(-3.125deg) skewY(-3.125deg); } 55.5% { transform: skewX(1.5625deg) skewY(1.5625deg); } 66.6% { transform: skewX(-0.78125deg) skewY(-0.78125deg); } 77.7% { transform: skewX(0.390625deg) skewY(0.390625deg); } 88.8% { transform: skewX(-0.1953125deg) skewY(-0.1953125deg); } }
.jello-animation { animation: jello 1s forwards; transform-origin: center; }

// React Component
const Jello = ({ children }) => <div className="jello-animation">{children}</div>;`;

const tadaAnimationCode = String.raw`// CSS
@keyframes tada { from { transform: scale3d(1, 1, 1); } 10%, 20% { transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg); } 30%, 50%, 70%, 90% { transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg); } 40%, 60%, 80% { transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg); } to { transform: scale3d(1, 1, 1); } }
.tada-animation { animation: tada 1s forwards; }

// React Component
const Tada = ({ children }) => <div className="tada-animation">{children}</div>;`;

const swingAnimationCode = String.raw`// CSS
@keyframes swing { 20% { transform: rotate3d(0, 0, 1, 15deg); } 40% { transform: rotate3d(0, 0, 1, -10deg); } 60% { transform: rotate3d(0, 0, 1, 5deg); } 80% { transform: rotate3d(0, 0, 1, -5deg); } 100% { transform: rotate3d(0, 0, 1, 0deg); } }
.swing-animation { transform-origin: top center; animation: swing 1s ease-in-out forwards; }

// React Component
const Swing = ({ children }) => <div className="swing-animation">{children}</div>;`;

const zoomOutAnimationCode = String.raw`// CSS
@keyframes zoomOut { from { opacity: 1; } 50% { opacity: 0; transform: scale3d(.3, .3, .3); } to { opacity: 0; } }
.zoom-out { animation: zoomOut 0.6s ease-out forwards; }

// React Component
const ZoomOut = ({ children, delay = 0 }) => <div className="zoom-out" style={{ animationDelay: \`\${delay}s\` }}>{children}</div>;`;

const lightSpeedOutAnimationCode = String.raw`// CSS
@keyframes lightSpeedOut { from { opacity: 1; } to { transform: translate3d(100%, 0, 0) skewX(30deg); opacity: 0; } }
.lightspeed-out { animation: lightSpeedOut 1s ease-in forwards; }

// React Component
const LightSpeedOut = ({ children }) => <div className="lightspeed-out">{children}</div>;`;

// --- Combined CSS for All Animations ---
const allAnimationsCSS = [
  fadeInAnimationCode, slideInAnimationCode, rotateAnimationCode, scaleAnimationCode, pulseAnimationCode, flipAnimationCode, shakeAnimationCode, bounceAnimationCode, wobbleAnimationCode, zoomInAnimationCode, lightSpeedInAnimationCode, rollInAnimationCode, hingeAnimationCode, rubberBandAnimationCode, flashAnimationCode, jelloAnimationCode, tadaAnimationCode, swingAnimationCode, zoomOutAnimationCode, lightSpeedOutAnimationCode
].map(code => code.split('// React Component')[0]).join('\n');

// --- Helper Function for Copying to Clipboard ---
const copyToClipboard = (text, callback) => {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(() => {
      if (callback) callback('Copied!');
    }).catch(() => {
      fallbackCopyTextToClipboard(text, callback);
    });
  } else {
    fallbackCopyTextToClipboard(text, callback);
  }
};

const fallbackCopyTextToClipboard = (text, callback) => {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.style.position = 'fixed';
  textArea.style.left = '-9999px';
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    document.execCommand('copy');
    if (callback) callback('Copied!');
  } catch (err) {
    console.error('Failed to copy text: ', err);
    if (callback) callback('Failed to copy');
  }
  document.body.removeChild(textArea);
};

// --- Enhanced Animation Card Component ---
const AnimationCard = ({ title, description, animationClass, code, children, isInfinite = false }) => {
  const [copyStatus, setCopyStatus] = useState('Copy Code');
  const [isAnimating, setIsAnimating] = useState(true);
  const [animationKey, setAnimationKey] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const handleCopy = () => {
    copyToClipboard(code, (status) => {
      setCopyStatus(status);
      setTimeout(() => setCopyStatus('Copy Code'), 2000);
    });
  };

  const handleReplay = () => {
    setIsAnimating(false);
    setIsPlaying(true);
    setAnimationKey(prev => prev + 1);
    setTimeout(() => {
      setIsAnimating(true);
    }, 50);
  };

  const handlePlayPause = () => {
    if (isInfinite) {
      // For infinite animations, toggle the animation state
      setIsAnimating(!isAnimating);
      setIsPlaying(!isPlaying);
    } else {
      // For finite animations, replay if paused, pause if playing
      if (isPlaying) {
        setIsAnimating(false);
        setIsPlaying(false);
      } else {
        setAnimationKey(prev => prev + 1);
        setIsAnimating(true);
        setIsPlaying(true);
        
        // Auto-pause after animation completes (estimated duration)
        const animationDuration = getAnimationDuration(title);
        setTimeout(() => {
          setIsPlaying(false);
        }, animationDuration);
      }
    }
  };

  const getAnimationDuration = (animationTitle) => {
    const durations = {
      'Fade In': 1000,
      'Slide In': 800,
      'Scale': 600,
      'Flip': 1000,
      'Shake': 800,
      'Wobble': 1000,
      'Zoom In': 600,
      'Light Speed In': 1000,
      'Roll In': 800,
      'Hinge': 2000,
      'Rubber Band': 1000,
      'Flash': 1000,
      'Jello': 1000,
      'Tada': 1000,
      'Swing': 1000,
      'Zoom Out': 600,
      'Light Speed Out': 1000,
    };
    return durations[animationTitle] || 1000;
  };

  // Function to get appropriate animation class for buttons based on the card's animation
  const getButtonAnimation = (animationTitle, buttonType) => {
    const animationMap = {
      'Bounce': 'hover:animate-bounce',
      'Shake': 'hover:animate-pulse', // Using pulse as shake alternative
      'Pulse': 'hover:animate-pulse',
      'Rotate': 'hover:animate-spin',
      'Scale': 'hover:scale-110 transform',
      'Fade In': 'hover:opacity-75',
      'Slide In': 'hover:translate-x-1 transform',
      'Flip': 'hover:rotate-12 transform',
      'Wobble': 'hover:animate-bounce',
      'Zoom In': 'hover:scale-105 transform',
      'Light Speed In': 'hover:skew-x-3 transform',
      'Roll In': 'hover:rotate-6 transform',
      'Hinge': 'hover:rotate-3 transform',
      'Rubber Band': 'hover:scale-105 transform',
      'Flash': 'hover:animate-pulse',
      'Jello': 'hover:skew-x-2 transform',
      'Tada': 'hover:scale-110 transform',
      'Swing': 'hover:rotate-6 transform',
      'Zoom Out': 'hover:scale-95 transform',
      'Light Speed Out': 'hover:skew-x-3 transform'
    };
    
    return animationMap[animationTitle] || 'hover:scale-105 transform';
  };

  // Function to handle button hover animations
  const handleButtonHover = (e, animationTitle, buttonType) => {
    const button = e.currentTarget;
    
    // Remove any existing animation classes
    button.classList.remove('animate-bounce', 'animate-pulse', 'animate-spin');
    
    // Add specific animation based on the card's animation type
    switch(animationTitle) {
      case 'Bounce':
        button.style.animation = 'bounce 0.5s ease-in-out';
        break;
      case 'Shake':
        button.style.animation = 'shake 0.5s ease-in-out';
        break;
      case 'Pulse':
        button.style.animation = 'pulse 0.5s ease-in-out';
        break;
      case 'Rotate':
        button.style.transform = 'rotate(360deg)';
        button.style.transition = 'transform 0.5s ease-in-out';
        break;
      case 'Wobble':
        button.style.animation = 'wobble 0.5s ease-in-out';
        break;
      case 'Tada':
        button.style.animation = 'tada 0.5s ease-in-out';
        break;
      case 'Swing':
        button.style.animation = 'swing 0.5s ease-in-out';
        break;
      case 'Jello':
        button.style.animation = 'jello 0.5s ease-in-out';
        break;
      case 'Rubber Band':
        button.style.animation = 'rubberBand 0.5s ease-in-out';
        break;
      case 'Flash':
        button.style.animation = 'flash 0.5s ease-in-out';
        break;
      default:
        button.style.transform = 'scale(1.05)';
        button.style.transition = 'transform 0.2s ease-in-out';
    }
    
    // Reset after animation
    setTimeout(() => {
      button.style.animation = '';
      button.style.transform = '';
      button.style.transition = '';
    }, 500);
  };

  // Function to handle play/pause button animations
  const handlePlayPauseHover = (e, animationTitle) => {
    const button = e.currentTarget;
    
    if (isPlaying) {
      // If playing, show pause-related animation on hover
      switch(animationTitle) {
        case 'Bounce':
          button.style.animation = 'bounce 0.3s ease-in-out';
          break;
        case 'Pulse':
          button.style.animation = 'pulse 0.5s ease-in-out';
          break;
        case 'Rotate':
          button.style.transform = 'rotate(180deg)';
          button.style.transition = 'transform 0.3s ease-in-out';
          break;
        case 'Shake':
          button.style.animation = 'shake 0.3s ease-in-out';
          break;
        case 'Wobble':
          button.style.animation = 'wobble 0.3s ease-in-out';
          break;
        default:
          button.style.transform = 'scale(0.95)';
          button.style.transition = 'transform 0.2s ease-in-out';
      }
    } else {
      // If paused, show play-related animation on hover
      button.style.transform = 'scale(1.1)';
      button.style.transition = 'transform 0.2s ease-in-out';
    }
    
    setTimeout(() => {
      button.style.animation = '';
      button.style.transform = '';
      button.style.transition = '';
    }, 300);
  };

  useEffect(() => {
    setIsAnimating(true);
    setIsPlaying(true);
    
    // Auto-pause finite animations after they complete
    if (!isInfinite && isAnimating) {
      const duration = getAnimationDuration(title);
      const timer = setTimeout(() => {
        setIsPlaying(false);
      }, duration);
      
      return () => clearTimeout(timer);
    }
  }, [animationKey, title, isInfinite, isAnimating]);

  return (
    <div className="bg-card rounded-xl shadow-lg border border-border overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Header */}
      <div className="bg-gradient-primary text-white p-4">
        <h2 className="text-xl font-bold mb-1">{title}</h2>
        <p className="text-primary-foreground/80 text-sm">{description}</p>
      </div>

      {/* Preview Section */}
      <div className="p-6">
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-muted-foreground mb-3 flex items-center gap-2">
            <span className="w-2 h-2 bg-accent rounded-full"></span>
            Live Preview
          </h4>
          <div className="bg-muted/20 border-2 border-dashed border-border rounded-lg p-8 min-h-[140px] flex items-center justify-center overflow-hidden relative">
            {/* Animation Status Indicator */}
            <div className="absolute top-2 right-2 flex items-center gap-1">
              <div className={`w-2 h-2 rounded-full ${isPlaying ? 'bg-accent animate-pulse' : 'bg-destructive'}`}></div>
              <span className="text-xs text-muted-foreground font-medium">
                {isPlaying ? (isInfinite ? 'Playing' : 'Playing') : 'Paused'}
              </span>
            </div>
            
            <div 
              key={animationKey}
              className={isAnimating && isPlaying ? animationClass : ''}
              style={{ 
                visibility: 'visible',
                opacity: (!isAnimating || !isPlaying) ? 1 : undefined,
                transform: (!isAnimating || !isPlaying) ? 'none' : undefined,
                animationPlayState: isPlaying ? 'running' : 'paused'
              }}
            >
              <div className="text-lg font-semibold text-foreground bg-card px-4 py-2 rounded-lg shadow-sm border border-border">
                {children || title}
              </div>
            </div>
          </div>
        </div>

        {/* Control Buttons */}
        <div className="flex gap-2 mb-4">
          <button 
            className={`flex-1 px-3 py-2 text-sm rounded-md transition-all duration-200 flex items-center justify-center gap-2 ${
              isPlaying 
                ? 'bg-destructive text-destructive-foreground hover:bg-destructive/90' 
                : 'bg-accent text-accent-foreground hover:bg-accent/90'
            } ${getButtonAnimation(title, 'playPause')}`}
            onClick={handlePlayPause}
            onMouseEnter={(e) => handlePlayPauseHover(e, title)}
          >
            {isPlaying ? (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <rect x="6" y="4" width="4" height="16"></rect>
                  <rect x="14" y="4" width="4" height="16"></rect>
                </svg>
                Pause
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <polygon points="5,3 19,12 5,21"></polygon>
                </svg>
                Play
              </>
            )}
          </button>
          <button 
            className={`flex-1 px-3 py-2 text-sm bg-primary text-primary-foreground rounded-md transition-all duration-200 flex items-center justify-center gap-2 hover:bg-primary/90 ${
              getButtonAnimation(title, 'replay')
            }`}
            onClick={handleReplay}
            onMouseEnter={(e) => handleButtonHover(e, title, 'replay')}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Replay
          </button>
        </div>

        {/* Code Section */}
        <div className="bg-background border border-border rounded-lg p-4 mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs text-muted-foreground font-mono">CSS & React Code</span>
            <button 
              className={`px-3 py-1 text-xs rounded transition-all duration-200 ${
                copyStatus === 'Copied!' 
                  ? 'bg-accent text-accent-foreground scale-110 transform' 
                  : 'bg-muted text-muted-foreground hover:bg-muted/80 hover:scale-105 transform'
              } ${getButtonAnimation(title, 'copy')}`}
              onClick={handleCopy}
              onMouseEnter={(e) => handleButtonHover(e, title, 'copy')}
            >
              {copyStatus}
            </button>
          </div>
          <div className="overflow-x-auto">
            <pre className="text-sm text-foreground">
              <code>{code}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Main Animations Component ---
const Animations = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    const styleElement = document.createElement('style');
    styleElement.innerHTML = allAnimationsCSS;
    document.head.appendChild(styleElement);
    return () => {
      if (document.head.contains(styleElement)) {
        document.head.removeChild(styleElement);
      }
    };
  }, []);

  const animationData = [
    { title: 'Fade In', description: 'A smooth opacity transition from invisible to visible', animationClass: 'fade-in', code: fadeInAnimationCode, category: 'entrance', content: '✨ Fade In' },
    { title: 'Slide In', description: 'Slides element from left with smooth easing', animationClass: 'slide-in', code: slideInAnimationCode, category: 'entrance', content: '➡️ Slide In' },
    { title: 'Rotate', description: 'Continuous 360-degree rotation animation', animationClass: 'rotate-animation', code: rotateAnimationCode, category: 'attention', content: '🔄', isInfinite: true },
    { title: 'Scale', description: 'Grows element from small to normal size', animationClass: 'scale-animation', code: scaleAnimationCode, category: 'entrance', content: '📈 Scale' },
    { title: 'Pulse', description: 'Subtle breathing effect with scale variation', animationClass: 'pulse-animation', code: pulseAnimationCode, category: 'attention', content: '💓 Pulse', isInfinite: true },
    { title: 'Flip', description: '3D flip animation with perspective effect', animationClass: 'flip-animation', code: flipAnimationCode, category: 'entrance', content: '🔄 Flip' },
    { title: 'Shake', description: 'Horizontal shaking motion for alerts', animationClass: 'shake-animation', code: shakeAnimationCode, category: 'attention', content: '⚡ Shake' },
    { title: 'Bounce', description: 'Classic bouncing ball physics animation', animationClass: 'bounce-animation', code: bounceAnimationCode, category: 'attention', content: '🏀 Bounce', isInfinite: true },
    { title: 'Wobble', description: 'Playful wobbling motion with rotation', animationClass: 'wobble-animation', code: wobbleAnimationCode, category: 'attention', content: '🌊 Wobble' },
    { title: 'Zoom In', description: 'Dramatic zoom entrance with 3D scaling', animationClass: 'zoom-in', code: zoomInAnimationCode, category: 'entrance', content: '🔍 Zoom In' },
    { title: 'Light Speed In', description: 'Ultra-fast entrance with motion blur effect', animationClass: 'lightspeed-in', code: lightSpeedInAnimationCode, category: 'entrance', content: '⚡ Light Speed' },
    { title: 'Roll In', description: 'Rolling entrance like a wheel', animationClass: 'roll-in', code: rollInAnimationCode, category: 'entrance', content: '🎯 Roll In' },
    { title: 'Hinge', description: 'Dramatic exit animation like a falling door', animationClass: 'hinge-animation', code: hingeAnimationCode, category: 'exit', content: '🚪 Hinge' },
    { title: 'Rubber Band', description: 'Elastic stretching effect like rubber', animationClass: 'rubberband-animation', code: rubberBandAnimationCode, category: 'attention', content: '🎈 Rubber Band' },
    { title: 'Flash', description: 'Strobing visibility effect', animationClass: 'flash-animation', code: flashAnimationCode, category: 'attention', content: '💡 Flash' },
    { title: 'Jello', description: 'Gelatinous wobble with skew transforms', animationClass: 'jello-animation', code: jelloAnimationCode, category: 'attention', content: '🍮 Jello' },
    { title: 'Tada', description: 'Celebratory attention-grabbing animation', animationClass: 'tada-animation', code: tadaAnimationCode, category: 'attention', content: '🎉 Tada!' },
    { title: 'Swing', description: 'Pendulum-like swinging motion', animationClass: 'swing-animation', code: swingAnimationCode, category: 'attention', content: '🎪 Swing' },
    { title: 'Zoom Out', description: 'Shrinking exit animation', animationClass: 'zoom-out', code: zoomOutAnimationCode, category: 'exit', content: '🔍 Zoom Out' },
    { title: 'Light Speed Out', description: 'Ultra-fast exit with motion blur', animationClass: 'lightspeed-out', code: lightSpeedOutAnimationCode, category: 'exit', content: '⚡ Light Exit' },
  ];

  const categories = [
    { value: 'all', label: 'All Animations', count: animationData.length },
    { value: 'entrance', label: 'Entrance', count: animationData.filter(a => a.category === 'entrance').length },
    { value: 'attention', label: 'Attention', count: animationData.filter(a => a.category === 'attention').length },
    { value: 'exit', label: 'Exit', count: animationData.filter(a => a.category === 'exit').length },
  ];

  const filteredAnimations = animationData.filter(anim => {
    const matchesSearch = anim.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         anim.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || anim.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-hero">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            React & CSS Animations
          </h1>
          <p className="text-xl text-muted-foreground mb-8">Interactive preview of 20 ready-to-use animations for your projects</p>
          
          {/* Search and Filter */}
          <div className="max-w-2xl mx-auto space-y-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search animations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-12 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent shadow-sm"
              />
              <svg className="absolute left-4 top-3.5 w-5 h-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map(category => (
                <button
                  key={category.value}
                  onClick={() => setSelectedCategory(category.value)}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05) rotate(2deg)';
                    e.currentTarget.style.transition = 'all 0.2s ease-in-out';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = selectedCategory === category.value ? 'scale(1.05)' : 'scale(1)';
                    e.currentTarget.style.transition = 'all 0.2s ease-in-out';
                  }}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category.value
                      ? 'bg-primary text-primary-foreground shadow-lg transform scale-105'
                      : 'bg-card text-card-foreground hover:bg-muted shadow-sm'
                  }`}
                >
                  {category.label} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </header>

        {/* Results Count */}
        <div className="text-center mb-6">
          <p className="text-muted-foreground">
            Showing {filteredAnimations.length} of {animationData.length} animations
          </p>
        </div>

        {/* Animation Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredAnimations.map(anim => (
            <div
              key={anim.title}
              onMouseEnter={(e) => {
                const card = e.currentTarget;
                switch(anim.title) {
                  case 'Bounce':
                    card.style.animation = 'bounce 0.6s ease-in-out';
                    break;
                  case 'Shake':
                    card.style.animation = 'shake 0.6s ease-in-out';
                    break;
                  case 'Pulse':
                    card.style.animation = 'pulse 1s ease-in-out';
                    break;
                  case 'Wobble':
                    card.style.animation = 'wobble 0.6s ease-in-out';
                    break;
                  case 'Tada':
                    card.style.animation = 'tada 0.6s ease-in-out';
                    break;
                  case 'Swing':
                    card.style.animation = 'swing 0.6s ease-in-out';
                    break;
                  case 'Jello':
                    card.style.animation = 'jello 0.6s ease-in-out';
                    break;
                  case 'Rubber Band':
                    card.style.animation = 'rubberBand 0.6s ease-in-out';
                    break;
                  case 'Flash':
                    card.style.animation = 'flash 0.6s ease-in-out';
                    break;
                  case 'Scale':
                    card.style.transform = 'scale(1.02)';
                    card.style.transition = 'transform 0.3s ease-in-out';
                    break;
                  case 'Rotate':
                    card.style.transform = 'rotate(5deg) scale(1.02)';
                    card.style.transition = 'transform 0.3s ease-in-out';
                    break;
                  default:
                    card.style.transform = 'translateY(-4px) scale(1.01)';
                    card.style.transition = 'all 0.3s ease-in-out';
                }
              }}
              onMouseLeave={(e) => {
                const card = e.currentTarget;
                card.style.animation = '';
                card.style.transform = '';
                card.style.transition = 'all 0.3s ease-in-out';
              }}
            >
              <AnimationCard 
                title={anim.title}
                description={anim.description}
                animationClass={anim.animationClass}
                code={anim.code}
                isInfinite={anim.isInfinite}
              >
                {anim.content}
              </AnimationCard>
            </div>
          ))}
        </div>

        {filteredAnimations.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-foreground mb-2">No animations found</h3>
            <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Animations;