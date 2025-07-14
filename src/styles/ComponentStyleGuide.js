/* Educational Theme Component Style Guide
 * Examples of how to use the new educational theme classes
 * This file serves as documentation and examples for developers
 */

// Example: Hero Title Component
export const HeroTitleExample = () => (
  <div className="edu-hero-title">
    Inteligencia Artificial para Profesionales
  </div>
);

// Example: Course Subtitle
export const SubtitleExample = () => (
  <div className="edu-subtitle">
    De los datos a la innovación empresarial
  </div>
);

// Example: Section Headings
export const HeadingExamples = () => (
  <div className="edu-space-y-6">
    <h1 className="edu-heading-1">Machine Learning Fundamentals</h1>
    <h2 className="edu-heading-2">Supervised Learning</h2>
    <h3 className="edu-heading-3">Linear Regression</h3>
  </div>
);

// Example: Educational Cards
export const CardExamples = () => (
  <div className="edu-grid-2">
    {/* Basic Learning Card */}
    <div className="edu-card">
      <h3 className="edu-heading-3">Basic Concept</h3>
      <p className="edu-text">
        This is a basic educational card for presenting information.
      </p>
    </div>

    {/* Interactive Card */}
    <div className="edu-card edu-card-interactive">
      <h3 className="edu-heading-3">Interactive Element</h3>
      <p className="edu-text">
        Click this card to interact with it.
      </p>
    </div>

    {/* Concept Card */}
    <div className="edu-concept-card">
      <h4 className="edu-heading-3">Key Concept</h4>
      <p className="edu-text">
        Important concepts are highlighted with blue accents.
      </p>
    </div>

    {/* Example Card */}
    <div className="edu-example-card">
      <h4 className="edu-heading-3">Code Example</h4>
      <pre className="edu-text-small">
        {`const model = new LinearRegression();
model.fit(X_train, y_train);`}
      </pre>
    </div>

    {/* Warning Card */}
    <div className="edu-warning-card">
      <h4 className="edu-heading-3">Important Note</h4>
      <p className="edu-text">
        Pay attention to this important information.
      </p>
    </div>
  </div>
);

// Example: Button Components
export const ButtonExamples = () => (
  <div className="edu-flex-center edu-space-y-4">
    <button className="edu-btn-primary">
      Start Learning
    </button>
    
    <button className="edu-btn-secondary">
      Read More
    </button>
    
    <button className="edu-btn-nav">
      Next Slide
    </button>
  </div>
);

// Example: Progress Indicator
export const ProgressExample = () => (
  <div className="edu-card">
    <h3 className="edu-heading-3">Learning Progress</h3>
    <div className="edu-progress">
      <div 
        className="edu-progress-bar" 
        style={{ width: '65%' }}
      ></div>
    </div>
    <p className="edu-text-small">65% Complete</p>
  </div>
);

// Example: Interactive Slider
export const SliderExample = () => (
  <div className="edu-card">
    <h3 className="edu-heading-3">Adjust Parameters</h3>
    <div className="edu-space-y-4">
      <label className="edu-text">Learning Rate: 0.01</label>
      <input 
        type="range" 
        className="edu-slider" 
        min="0.001" 
        max="0.1" 
        step="0.001" 
        defaultValue="0.01"
      />
    </div>
  </div>
);

// Example: Grid Layouts
export const GridExamples = () => (
  <div className="edu-space-y-8">
    {/* Two Column Grid */}
    <div className="edu-grid-2">
      <div className="edu-card">
        <h3 className="edu-heading-3">Column 1</h3>
        <p className="edu-text">Content for first column</p>
      </div>
      <div className="edu-card">
        <h3 className="edu-heading-3">Column 2</h3>
        <p className="edu-text">Content for second column</p>
      </div>
    </div>

    {/* Three Column Grid */}
    <div className="edu-grid-3">
      <div className="edu-concept-card">
        <h4 className="edu-heading-3">Concept 1</h4>
      </div>
      <div className="edu-concept-card">
        <h4 className="edu-heading-3">Concept 2</h4>
      </div>
      <div className="edu-concept-card">
        <h4 className="edu-heading-3">Concept 3</h4>
      </div>
    </div>

    {/* Auto Grid (Responsive) */}
    <div className="edu-grid-auto">
      <div className="edu-card">Auto 1</div>
      <div className="edu-card">Auto 2</div>
      <div className="edu-card">Auto 3</div>
      <div className="edu-card">Auto 4</div>
    </div>
  </div>
);

// Example: Animation Classes
export const AnimationExamples = () => (
  <div className="edu-space-y-6">
    <div className="edu-card edu-fade-in">
      <h3 className="edu-heading-3">Fade In Animation</h3>
      <p className="edu-text">This card fades in smoothly</p>
    </div>

    <div className="edu-card edu-slide-up">
      <h3 className="edu-heading-3">Slide Up Animation</h3>
      <p className="edu-text">This card slides up from bottom</p>
    </div>

    <button className="edu-btn-primary edu-bounce">
      Bounce Animation
    </button>
  </div>
);

// Example: Full Slide Layout
export const FullSlideExample = () => (
  <div className="edu-container">
    <div className="edu-space-y-8">
      {/* Hero Section */}
      <div className="edu-text-center">
        <h1 className="edu-hero-title">
          Machine Learning Algorithms
        </h1>
        <p className="edu-subtitle">
          Understanding the core algorithms that power AI
        </p>
      </div>

      {/* Content Grid */}
      <div className="edu-grid-2">
        <div className="edu-concept-card">
          <h3 className="edu-heading-3">Supervised Learning</h3>
          <p className="edu-text">
            Learn with labeled data to make predictions
          </p>
          <button className="edu-btn-primary">
            Explore
          </button>
        </div>

        <div className="edu-concept-card">
          <h3 className="edu-heading-3">Unsupervised Learning</h3>
          <p className="edu-text">
            Discover patterns in data without labels
          </p>
          <button className="edu-btn-primary">
            Explore
          </button>
        </div>
      </div>

      {/* Interactive Example */}
      <div className="edu-example-card">
        <h3 className="edu-heading-3">Try It Yourself</h3>
        <p className="edu-text">
          Adjust the parameters below to see how it affects the model:
        </p>
        <div className="edu-space-y-4">
          <div>
            <label className="edu-text-small">Learning Rate</label>
            <input type="range" className="edu-slider" />
          </div>
          <button className="edu-btn-secondary">
            Run Model
          </button>
        </div>
      </div>

      {/* Progress */}
      <div className="edu-card">
        <h3 className="edu-heading-3">Your Progress</h3>
        <div className="edu-progress">
          <div className="edu-progress-bar" style={{ width: '45%' }}></div>
        </div>
        <p className="edu-text-small">Lesson 3 of 8 completed</p>
      </div>
    </div>
  </div>
);

/* MIGRATION GUIDE FROM OLD CLASSES TO NEW EDUCATIONAL THEME

Old Class               -> New Educational Class
================================================================================================
.glass-effect          -> .edu-glass
.glass-effect-strong   -> .edu-glass-strong
.enhanced-title        -> .edu-hero-title or .edu-heading-1
.btn-primary           -> .edu-btn-primary
.btn-secondary         -> .edu-btn-secondary
.interactive-slider    -> .edu-slider
.fade-in              -> .edu-fade-in
.slide-in             -> .edu-slide-up
.bounce-in            -> .edu-bounce

Grid Classes:
.grid-cols-2          -> .edu-grid-2
.grid-cols-3          -> .edu-grid-3
.space-y-6            -> .edu-space-y-6

Typography:
h1                    -> .edu-heading-1
h2                    -> .edu-heading-2
h3                    -> .edu-heading-3
p                     -> .edu-text

Special Educational Cards:
[new]                 -> .edu-concept-card (for key concepts)
[new]                 -> .edu-example-card (for code examples)
[new]                 -> .edu-warning-card (for important notes)
[new]                 -> .edu-progress (for learning progress)

Layout:
.container            -> .edu-container
.flex                 -> .edu-flex
.flex-center          -> .edu-flex-center
.flex-between         -> .edu-flex-between

*/

export default {
  HeroTitleExample,
  SubtitleExample,
  HeadingExamples,
  CardExamples,
  ButtonExamples,
  ProgressExample,
  SliderExample,
  GridExamples,
  AnimationExamples,
  FullSlideExample
};