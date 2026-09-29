const gkQuestions = [
    // ===== Section: Statics and Dynamics =====
    {
        id: 1,
        question: `What is rectilinear motion?`,
        image: null,
        options: [
            `Motion along a curved path`,
            `Motion in a straight line`,
            `Circular motion`,
            `Random motion`
        ],
        correctAnswer: 1
    },
    {
        id: 2,
        question: `Which of the following is true for rectilinear motion with uniform acceleration?`,
        image: null,
        options: [
            `Velocity changes at a constant rate`,
            `Acceleration changes at a constant rate`,
            `Displacement changes at a constant rate`,
            `None of these`
        ],
        correctAnswer: 0
    },
    {
        id: 3,
        question: `A particle, starting from rest, moves along the x-axis with an acceleration \\( x - 3x^{2} \\). Then the particle comes to rest again after it has covered a distance`,
        image: null,
        options: [
            `1 unit`,
            `2 unit`,
            `\\( \\frac{1}{2} \\) unit`,
            `None of these`
        ],
        correctAnswer: 3
    },
    {
        id: 4,
        question: `The speed of a particle moving in a straight line is given by the relation \\( v^{2} = a - bx^{2} \\), where \\( x \\) is the distance of the particle from a fixed point (origin), \\( a \\) and \\( b \\) being constant. The periodic time of the motion is`,
        image: null,
        options: [
            `\\( 2\\pi \\)`,
            `\\( \\pi \\)`,
            `\\( \\frac{2\\pi}{b} \\)`,
            `\\( \\frac{2\\pi}{\\sqrt{b}} \\)`
        ],
        correctAnswer: 3
    },
    {
        id: 5,
        question: `A particle is executing S.H.M. such that its period of oscillation is \\( 2\\pi \\) sec. If its maximum acceleration is \\( 8 \\text{ cm/sec}^{2} \\), then its amplitude will be`,
        image: null,
        options: [
            `8 cm`,
            `16 cm`,
            `4 cm`,
            `None of these`
        ],
        correctAnswer: 0
    },
    {
        id: 6,
        question: `A particle executing an SHM has a maximum acceleration \\( a \\) and a maximum velocity \\( b \\). Then, its period of oscillations \\( T \\) will be`,
        image: null,
        options: [
            `\\( \\frac{2\\pi a}{b} \\)`,
            `\\( \\frac{a}{2\\pi b} \\)`,
            `\\( \\frac{2\\pi b}{a} \\)`,
            `None of these`
        ],
        correctAnswer: 2
    },
    {
        id: 7,
        question: `A particle executes an SHM with an amplitude of \\( b \\) and a time period of \\( T \\). The (minimum) time taken by the particle to travel half its amplitude from the equilibrium position is`,
        image: null,
        options: [
            `\\( \\frac{3T}{2} \\)`,
            `\\( \\frac{T}{12} \\)`,
            `\\( \\frac{2T}{3} \\)`,
            `None of these`
        ],
        correctAnswer: 1
    },
    {
        id: 8,
        question: `If the position of a moving particle at time \\( t \\) is given by \\( x = at^{2} \\), \\( y = 2at \\), where \\( a \\) is a constant. Then the resultant acceleration of the particle at time \\( t \\) is`,
        image: null,
        options: [
            `4a`,
            `0`,
            `a`,
            `2a`
        ],
        correctAnswer: 3
    },
    {
        id: 9,
        question: `A planet revolving around the sun (at one foci) in an elliptical orbit has a constant`,
        image: null,
        options: [
            `Linear velocity`,
            `Kinetic energy`,
            `Angular velocity`,
            `Angular momentum`
        ],
        correctAnswer: 3
    },
    {
        id: 10,
        question: `A point mass is moving in a hyperbolic orbit under a central force always directed towards one of its foci, then it has a constant`,
        image: null,
        options: [
            `Angular velocity`,
            `Moment of momentum`,
            `Linear velocity`,
            `None of these`
        ],
        correctAnswer: 1
    },
    {
        id: 11,
        question: `Which of the following is a non-conservative force?`,
        image: null,
        options: [
            `Frictional force`,
            `Gravitational force`,
            `Electrostatic force`,
            `Spring force`
        ],
        correctAnswer: 0
    },
    {
        id: 12,
        question: `A central orbit is always`,
        image: null,
        options: [
            `A straight line`,
            `A plane curve`,
            `A circle`,
            `A hyperbola`
        ],
        correctAnswer: 1
    },
    {
        id: 13,
        question: `Which of the following quantities is not conserved for a particle moving in a conservative central force field?`,
        image: null,
        options: [
            `Moment of momentum`,
            `Total Energy`,
            `Linear momentum`,
            `Areal Velocity`
        ],
        correctAnswer: 2
    },
    {
        id: 14,
        question: `Which of the following is true about the magnitude of acceleration of a particle undergoing SHM at its maximum displacement?`,
        image: null,
        options: [
            `The acceleration is zero`,
            `The acceleration is maximum`,
            `The acceleration is minimum`,
            `None of these`
        ],
        correctAnswer: 1
    },
    {
        id: 15,
        question: `If an object's velocity vector is always perpendicular to the radius vector, what kind of motion does the object exhibit?`,
        image: null,
        options: [
            `Elliptical motion`,
            `Parabolic motion`,
            `Hyperbolic motion`,
            `Circular motion`
        ],
        correctAnswer: 3
    },
    {
        id: 16,
        question: `For a central orbit, the expression for the constant \\( h \\) is given by`,
        image: null,
        options: [
            `\\( h = r^{2}\\frac{d\\theta}{dt} \\)`,
            `\\( h = 0 \\)`,
            `\\( h = r\\frac{d\\theta}{dt} \\)`,
            `\\( h = \\frac{dr}{dt} \\)`
        ],
        correctAnswer: 0
    },
    {
        id: 17,
        question: `If a particle describes a parabola whose pedal equation is \\( p^{2} = ar \\) under a central force towards the pole, then the force varies as`,
        image: null,
        options: [
            `\\( \\frac{1}{r^{2}} \\)`,
            `\\( \\frac{1}{r^{3}} \\)`,
            `\\( \\frac{1}{r} \\)`,
            `\\( r \\)`
        ],
        correctAnswer: 1
    },
    {
        id: 18,
        question: `A particle describes a curve \\( r = ae^{\\theta} \\), \\( a \\) being constant, with a constant angular velocity, then the radial acceleration of the particle is`,
        image: null,
        options: [
            `Zero`,
            `Proportional to \\( r^{2} \\)`,
            `Proportional to \\( \\frac{1}{r} \\)`,
            `Proportional to \\( r \\)`
        ],
        correctAnswer: 3
    },
    {
        id: 19,
        question: `A particle describes a circle \\( r = a \\), where \\( a \\) being the radius of the circle, then its radial velocity will be`,
        image: null,
        options: [
            `\\( a\\frac{d\\theta}{dt} \\)`,
            `Zero`,
            `a`,
            `None of these`
        ],
        correctAnswer: 1
    },
    {
        id: 20,
        question: `In a central orbit, at an apse, a particle moves`,
        image: null,
        options: [
            `Along the radius vector`,
            `At an angle \\( \\frac{\\pi}{4} \\) with the initial line`,
            `At an angle \\( \\frac{\\pi}{2} \\) to the radius vector`,
            `None of these`
        ],
        correctAnswer: 2
    },
    {
        id: 21,
        question: `If a particle moves in a plane, the rate of description of sectorial area is called`,
        image: null,
        options: [
            `Radial velocity`,
            `Cross-radial velocity`,
            `Angular velocity`,
            `Areal velocity`
        ],
        correctAnswer: 3
    },
    {
        id: 22,
        question: `The normal component of acceleration for a particle moving along a plane curve is`,
        image: null,
        options: [
            `\\( \\frac{d^{2}s}{dt^{2}} \\)`,
            `\\( v\\frac{dv}{ds} \\)`,
            `\\( \\frac{v^{2}}{\\rho} \\)`,
            `\\( r\\frac{d\\theta}{dt} \\)`
        ],
        correctAnswer: 2
    },
    {
        id: 23,
        question: `Relation between angular velocity and linear velocity of a particle moving in a plane curve is`,
        image: null,
        options: [
            `\\( \\frac{d\\theta}{dt} = \\frac{pv}{r} \\)`,
            `\\( \\frac{d\\theta}{dt} = \\frac{v}{p} \\)`,
            `\\( \\frac{d\\theta}{dt} = \\frac{pv^{2}}{r} \\)`,
            `None of these`
        ],
        correctAnswer: 1
    },
    {
        id: 24,
        question: `A particle is moving in a circle of radius \\( a \\) with velocity \\( v \\). The normal acceleration of the particle is`,
        image: null,
        options: [
            `\\( v\\frac{dv}{ds} \\)`,
            `\\( \\frac{dv}{dt} \\)`,
            `0`,
            `\\( \\frac{v^{2}}{a} \\)`
        ],
        correctAnswer: 3
    },
    {
        id: 25,
        question: `In a central force field, the force experienced by a particle is`,
        image: null,
        options: [
            `Towards or away from the center force along the radial direction`,
            `Tangentially to its path`,
            `In the direction opposite to the velocity vector`,
            `None of these`
        ],
        correctAnswer: 0
    },
    {
        id: 26,
        question: `If a particle describes a parabola under a central force towards its focus, then the force varies as`,
        image: null,
        options: [
            `r`,
            `\\( r^{2} \\)`,
            `\\( \\frac{1}{r^{2}} \\)`,
            `None of these`
        ],
        correctAnswer: 2
    },
    {
        id: 27,
        question: `If a particle describes an ellipse \\( \\frac{l}{r} = 1 - e\\cos\\theta \\) under a central force towards one of the foci, the law of force is given by`,
        image: null,
        options: [
            `\\( F \\propto x \\)`,
            `\\( F \\propto r \\)`,
            `\\( F \\propto \\frac{1}{r^{2}} \\)`,
            `\\( F \\propto r^{2} \\)`
        ],
        correctAnswer: 2
    },
    {
        id: 28,
        question: `If a particle describes a hyperbola \\( \\frac{l}{r} = 1 + e\\cos\\theta \\) under a central force towards one of the foci, the law of force is given by`,
        image: null,
        options: [
            `\\( F \\propto r^{2} \\)`,
            `\\( F \\propto r \\)`,
            `\\( F \\propto x \\)`,
            `\\( F \\propto \\frac{1}{r^{2}} \\)`
        ],
        correctAnswer: 3
    },
    {
        id: 29,
        question: `A particle describes a curve \\( r = k\\theta \\), \\( k \\) being constant, with a constant angular velocity, then the radial acceleration of the particle is`,
        image: null,
        options: [
            `Proportional to r`,
            `Proportional to \\( \\frac{1}{r} \\)`,
            `Zero`,
            `None of these`
        ],
        correctAnswer: 2
    },
    {
        id: 30,
        question: `The law of motion of a particle moving in a straight line is \\( s = \\frac{1}{2}vt \\). Then the acceleration of the particle is`,
        image: null,
        options: [
            `Proportional to velocity`,
            `Proportional to square of velocity`,
            `Proportional to inverse of velocity`,
            `Constant`
        ],
        correctAnswer: 3
    },
    {
        id: 31,
        question: `If the position of a moving particle at time \\( t \\) is given by \\( x = a\\cos pt \\), \\( y = a\\sin pt \\), where \\( a, p \\) are constants, the acceleration of the particle at time \\( t \\) is`,
        image: null,
        options: [
            `ap`,
            `\\( a^{2}p \\)`,
            `\\( p^{2}a \\)`,
            `\\( p^{2}a^{2} \\)`
        ],
        correctAnswer: 2
    },
    {
        id: 32,
        question: `A particle describes a curve \\( r = ae^{\\theta} \\) with constant angular velocity. Then the cross-radial velocity is`,
        image: null,
        options: [
            `Proportional to r`,
            `Proportional to \\( \\frac{1}{r} \\)`,
            `Non-zero constant`,
            `Zero`
        ],
        correctAnswer: 0
    },
    {
        id: 33,
        question: `The rate of description of sectorial area (i.e., areal velocity) by the particle in a central force field is always`,
        image: null,
        options: [
            `Zero`,
            `Constant`,
            `Not conserved`,
            `Infinite`
        ],
        correctAnswer: 1
    },
    {
        id: 34,
        question: `For a particle moving under a central force, its motion always takes place`,
        image: null,
        options: [
            `In space`,
            `In a straight line`,
            `In a plane`,
            `None of these`
        ],
        correctAnswer: 2
    },
    {
        id: 35,
        question: `If a particle moves in a conservative central force field, then its total energy is`,
        image: null,
        options: [
            `Zero`,
            `Conserved`,
            `Not conserved`,
            `Proportional to its velocity`
        ],
        correctAnswer: 1
    },
    {
        id: 36,
        question: `If a particle is moving in a circle of radius \\( a \\) with uniform speed \\( v \\). The acceleration of the particle towards the centre is`,
        image: null,
        options: [
            `va`,
            `\\( \\frac{v^{2}}{a} \\)`,
            `va`,
            `Zero`
        ],
        correctAnswer: 1
    },
    {
        id: 37,
        question: `A particle describes a plane curve with a constant speed and its resultant acceleration is constant, the path of particle is a`,
        image: null,
        options: [
            `Circle`,
            `Straight line`,
            `Parabola`,
            `None of these`
        ],
        correctAnswer: 1
    },
    {
        id: 38,
        question: `If a particle moves along a circle of radius \\( a \\) so that \\( r = a \\), then its transverse velocity is equal to`,
        image: null,
        options: [
            `\\( a\\frac{d\\theta}{dt} \\)`,
            `\\( \\frac{d\\theta}{dt} \\)`,
            `a`,
            `\\( a\\frac{dr}{dt} \\)`
        ],
        correctAnswer: 0
    },
    {
        id: 39,
        question: `If the position of a moving particle at time \\( t \\) is given by \\( x = 3t - 4t^{2} \\), \\( y = 4t - 8t^{2} \\), the velocity of the particle at time \\( t = 1 \\text{ sec} \\) is`,
        image: null,
        options: [
            `3 unit/sec`,
            `169 unit/sec`,
            `13 unit/sec`,
            `None of these`
        ],
        correctAnswer: 2
    },
    {
        id: 40,
        question: `A virtual displacement \\( \\delta r \\) is defined as an infinitesimal change in system coordinates occurring:`,
        image: null,
        options: [
            `Over a finite time interval \\( \\Delta t \\)`,
            `Instantaneously at a fixed time \\( (dt = 0) \\)`,
            `Along the path of actual motion only`,
            `Due to internal heat dissipation`
        ],
        correctAnswer: 1
    },
    {
        id: 41,
        question: `The necessary and sufficient condition for the equilibrium of a rigid body subjected to a system of coplanar forces is that the total virtual work done by external forces is:`,
        image: null,
        options: [
            `Positive`,
            `Negative`,
            `Zero`,
            `Equal to total kinetic energy`
        ],
        correctAnswer: 2
    },
    {
        id: 42,
        question: `In a system with smooth, rigid constraints, the virtual work done by the forces of constraint for any displacement compatible with the constraints is:`,
        image: null,
        options: [
            `Zero`,
            `Equal to potential energy`,
            `Infinite`,
            `Dependent on acceleration`
        ],
        correctAnswer: 0
    },
    {
        id: 43,
        question: `If a light rod of length \\( l \\) connects two particles, the virtual work done by the internal tension \\( T \\) when the length changes by \\( \\delta l \\) is:`,
        image: null,
        options: [
            `\\( -T\\delta l \\)`,
            `\\( T\\delta l \\)`,
            `\\( \\frac{1}{2}T\\delta l \\)`,
            `Zero always, as \\( \\delta l = 0 \\) for a rigid rod`
        ],
        correctAnswer: 3
    },
    {
        id: 44,
        question: `Which force performs non-zero virtual work in a mechanical system?`,
        image: null,
        options: [
            `Normal reaction on a smooth fixed surface`,
            `Tension in an inextensible string`,
            `External applied load`,
            `Reaction at a smooth fixed fulcrum`
        ],
        correctAnswer: 2
    },
    {
        id: 45,
        question: `A heavy uniform body of mass \\( M \\) rests in equilibrium on a convex surface. The equilibrium is stable if the height of its center of mass \\( h \\) above the point of contact satisfies:`,
        image: null,
        options: [
            `\\( h < \\rho \\) (where \\( \\rho \\) is the radius of curvature)`,
            `\\( h > \\rho \\)`,
            `\\( h = 2\\rho \\)`,
            `\\( h > 2\\rho \\)`
        ],
        correctAnswer: 0
    },
    {
        id: 46,
        question: `For a heavy body resting on a sphere of radius \\( R \\), if \\( h \\) is the height of C.M. above the contact point, the condition for neutral equilibrium is:`,
        image: null,
        options: [
            `\\( \\frac{1}{h} = \\frac{1}{R} \\)`,
            `\\( \\frac{1}{h} = \\frac{1}{r} + \\frac{1}{R} \\)`,
            `\\( h = R \\)`,
            `\\( h = 0 \\)`
        ],
        correctAnswer: 2
    },
    {
        id: 47,
        question: `Limiting static friction \\( F_{s} \\) is related to normal reaction \\( N \\) and coefficient of static friction \\( \\mu \\) by:`,
        image: null,
        options: [
            `\\( F_{s} = \\mu N \\)`,
            `\\( F_{s} < \\mu N \\)`,
            `\\( F_{s} = \\frac{N}{\\mu} \\)`,
            `\\( F_{s} = \\mu^{2}N \\)`
        ],
        correctAnswer: 0
    },
    {
        id: 48,
        question: `The angle of friction \\( \\lambda \\) is defined as the angle between the normal reaction \\( N \\) and the:`,
        image: null,
        options: [
            `Applied horizontal force`,
            `Resultant reaction \\( R \\) of the surface in limiting equilibrium`,
            `Force of limiting friction \\( F \\)`,
            `Inclined plane surface`
        ],
        correctAnswer: 1
    },
    {
        id: 49,
        question: `The relationship between the coefficient of friction \\( \\mu \\) and angle of friction \\( \\lambda \\) is:`,
        image: null,
        options: [
            `\\( \\mu = \\tan\\lambda \\)`,
            `\\( \\mu = \\sin\\lambda \\)`,
            `\\( \\mu = \\cos\\lambda \\)`,
            `\\( \\mu = \\cot\\lambda \\)`
        ],
        correctAnswer: 0
    },
    {
        id: 50,
        question: `The cone of friction is a cone with vertex at the point of contact, axis along the normal reaction, and semi-vertical angle equal to:`,
        image: null,
        options: [
            `Angle of repose`,
            `Angle of friction \\( \\lambda \\)`,
            `\\( 90^{\\circ} - \\lambda \\)`,
            `\\( 45^{\\circ} \\)`
        ],
        correctAnswer: 1
    },
    {
        id: 51,
        question: `The least force required to pull a body of weight \\( W \\) along a rough horizontal plane with coefficient of friction \\( \\mu = \\tan\\lambda \\) is:`,
        image: null,
        options: [
            `\\( W\\sin\\lambda \\)`,
            `\\( W\\cos\\lambda \\)`,
            `\\( W\\tan\\lambda \\)`,
            `\\( W\\sec\\lambda \\)`
        ],
        correctAnswer: 2
    },
    {
        id: 52,
        question: `Differential intrinsic equations of equilibrium for a string under central force field \\( (X,Y) \\) in a plane use as:`,
        image: null,
        options: [
            `Arc length`,
            `Angle made by tangent with initial line`,
            `Radius of curvature`,
            `Sag`
        ],
        correctAnswer: 0
    },
    {
        id: 53,
        question: `The tension \\( T \\) at any point of a flexible string in equilibrium under gravity alone depends on:`,
        image: null,
        options: [
            `The vertical height of the point`,
            `Horizontal distance only`,
            `Curvature of the peg only`,
            `Total mass of peg`
        ],
        correctAnswer: 0
    },
    {
        id: 54,
        question: `If \\( w \\) is the weight per unit length of a string under gravity, the differential equation for tension \\( T \\) along arc length \\( s \\) is \\( \\frac{dT}{ds} = \\)`,
        image: null,
        options: [
            `\\( w\\sin\\psi \\)`,
            `\\( w\\cos\\psi \\)`,
            `\\( -w\\sin\\psi \\)`,
            `\\( w\\rho \\)`
        ],
        correctAnswer: 2
    },
    {
        id: 55,
        question: `A common catenary is the curve formed by a uniform, perfectly flexible string hanging freely under:`,
        image: null,
        options: [
            `Central gravity`,
            `Uniform gravity with weight per unit length constant`,
            `Variable force per unit length`,
            `Horizontal wind force`
        ],
        correctAnswer: 1
    },
    {
        id: 56,
        question: `The Cartesian equation of the common catenary is:`,
        image: null,
        options: [
            `\\( y = c\\cosh\\left(\\frac{x}{c}\\right) \\)`,
            `\\( y = c\\sinh\\left(\\frac{x}{c}\\right) \\)`,
            `\\( y = c\\ln\\left(\\frac{x}{c}\\right) \\)`,
            `\\( x = c\\cosh\\left(\\frac{y}{c}\\right) \\)`
        ],
        correctAnswer: 0
    },
    {
        id: 57,
        question: `The intrinsic equation of the common catenary is:`,
        image: null,
        options: [
            `\\( s = c\\tan\\psi \\)`,
            `\\( s = c\\sin\\psi \\)`,
            `\\( s = c\\sec\\psi \\)`,
            `\\( s = c\\psi \\)`
        ],
        correctAnswer: 0
    },
    {
        id: 58,
        question: `Relation between tension \\( T \\) at any point \\( (x,y) \\) of a common catenary and vertical distance \\( y \\) from directrix is:`,
        image: null,
        options: [
            `\\( T = wy \\)`,
            `\\( T = wx \\)`,
            `\\( T = ws \\)`,
            `\\( T = wc \\)`
        ],
        correctAnswer: 0
    },
    {
        id: 59,
        question: `The horizontal component of tension \\( T_{0} \\) at every point on a common catenary is constant and equal to:`,
        image: null,
        options: [
            `\\( wc \\)`,
            `\\( wy \\)`,
            `\\( ws \\)`,
            `\\( wc^{2} \\)`
        ],
        correctAnswer: 0
    },
    {
        id: 60,
        question: `The relation between coordinates \\( y \\), arc length \\( s \\), and parameter \\( c \\) for a common catenary is:`,
        image: null,
        options: [
            `\\( y^{2} = c^{2} + s^{2} \\)`,
            `\\( y^{2} = c^{2} - s^{2} \\)`,
            `\\( s^{2} = y^{2} + c^{2} \\)`,
            `\\( y = c + s \\)`
        ],
        correctAnswer: 0
    }
];


















// ---------- Quiz Logic ----------
document.addEventListener('DOMContentLoaded', function () {

    let currentQuestionIndex = 0;
    let score = 0;
    let userAnswers = [];
    let questionTimer = null;
    let quizStartTime = null;
    let quizCompleted = false;
    let autoAdvanceTimeout = null;
    let advanceProgressInterval = null;
    let quizTimerInterval = null;

    const TOTAL_TIME = 1500;
    const QUESTION_TIME = 120;

    const questionText = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');
    const currentQuestionElement = document.getElementById('current-question');
    const scoreElement = document.getElementById('score');
    const totalTimeElement = document.getElementById('total-time');
    const feedbackElement = document.getElementById('feedback');
    const resultContainer = document.getElementById('result-container');
    const finalScoreElement = document.getElementById('final-score');
    const resultMessageElement = document.getElementById('result-message');
    const correctCountElement = document.getElementById('correct-count');
    const incorrectCountElement = document.getElementById('incorrect-count');
    const timeTakenElement = document.getElementById('time-taken');
    const percentageElement = document.getElementById('percentage');
    const restartBtn = document.getElementById('restart-btn');
    const homeBtn = document.getElementById('home-btn');

    // =============================================
    // ✅ LOCAL renderMathJax — quiz.js-এর উপর depend করে না
    // =============================================
    function renderMathJax(elements) {
        if (!elements) return;
        // খালি array বা null filter
        const targets = Array.isArray(elements) ? elements.filter(Boolean) : [elements];
        if (targets.length === 0) return;

        const tryRender = (attempt = 1) => {
            if (window.MathJax && MathJax.typesetPromise) {
                MathJax.typesetPromise(targets)
                    .catch(err => console.warn('MathJax error:', err));
            } else if (attempt < 25) {
                setTimeout(() => tryRender(attempt + 1), 200);
            } else {
                console.warn('MathJax not available after multiple retries.');
            }
        };

        tryRender();
    }

    function initQuiz() {
        currentQuestionIndex = 0;
        score = 0;
        userAnswers = [];
        quizCompleted = false;
        quizStartTime = Date.now();

        if (resultContainer) resultContainer.style.display = 'none';
        const qc = document.querySelector('.question-container');
        const tc = document.querySelector('.timer-container');
        if (qc) qc.style.display = 'block';
        if (tc) tc.style.display = 'block';

        updateScore();
        updateQuestionCounter();
        updateTotalTime();
        loadQuestion(currentQuestionIndex);
        startQuizTimer();
    }

    function loadQuestion(index) {
        if (index >= gkQuestions.length) {
            endQuiz();
            return;
        }

        const q = gkQuestions[index];

        // ✅ innerHTML for MathJax
        questionText.innerHTML = q.question;
        optionsContainer.innerHTML = '';

        const optionLetters = ['A', 'B', 'C', 'D'];

        q.options.forEach((option, i) => {
            const optionElement = document.createElement('div');
            optionElement.className = 'option';
            optionElement.dataset.index = i;

            if (userAnswers[index] !== undefined) {
                if (userAnswers[index] === i) optionElement.classList.add('selected');
                if (i === q.correctAnswer) {
                    optionElement.classList.add('correct');
                } else if (userAnswers[index] === i && userAnswers[index] !== q.correctAnswer) {
                    optionElement.classList.add('incorrect');
                }
            }

            optionElement.innerHTML = `
                <div class="option-letter">${optionLetters[i]}</div>
                <div class="option-text">${option}</div>
            `;

            if (userAnswers[index] === undefined) {
                optionElement.addEventListener('click', () => selectOption(i));
            }

            optionsContainer.appendChild(optionElement);
        });

        updateQuestionCounter();
        updateProgressBar(index + 1, gkQuestions.length);

        feedbackElement.className = 'feedback';
        feedbackElement.innerHTML = '';

        // ✅ MathJax render
        renderMathJax([questionText, optionsContainer]);

        startQuestionTimer();
    }

    function selectOption(optionIndex) {
        if (userAnswers[currentQuestionIndex] !== undefined) return;

        const options = document.querySelectorAll('.option');
        options.forEach(opt => {
            opt.classList.remove('selected');
            opt.style.pointerEvents = 'none';
        });

        options[optionIndex].classList.add('selected');

        const q = gkQuestions[currentQuestionIndex];
        const isCorrect = optionIndex === q.correctAnswer;
        userAnswers[currentQuestionIndex] = optionIndex;

        if (isCorrect) {
            score++;
            updateScore();
            showFeedback(true);
            options[q.correctAnswer].classList.add('correct');
        } else {
            showFeedback(false, q.options[q.correctAnswer]);
            options[q.correctAnswer].classList.add('correct');
            options[optionIndex].classList.add('incorrect');
        }

        if (questionTimer && questionTimer.stopTimer) questionTimer.stopTimer();
        startAutoAdvance(2000);
    }

    function startAutoAdvance(duration) {
        let progressBar = document.querySelector('.auto-advance-progress');
        if (!progressBar) {
            progressBar = document.createElement('div');
            progressBar.className = 'auto-advance-progress';
            progressBar.innerHTML = '<div class="advance-progress"></div>';
            if (feedbackElement && feedbackElement.parentNode) {
                feedbackElement.parentNode.insertBefore(progressBar, feedbackElement.nextSibling);
            }
        }

        const progressFill = progressBar.querySelector('.advance-progress');
        progressBar.classList.add('active');
        progressFill.style.width = '0%';

        if (autoAdvanceTimeout) clearTimeout(autoAdvanceTimeout);
        if (advanceProgressInterval) clearInterval(advanceProgressInterval);

        let progress = 0;
        const increment = 100 / (duration / 50);

        advanceProgressInterval = setInterval(() => {
            progress += increment;
            progressFill.style.width = `${Math.min(progress, 100)}%`;
        }, 50);

        autoAdvanceTimeout = setTimeout(() => {
            progressBar.classList.remove('active');
            clearInterval(advanceProgressInterval);
            goToNextQuestion();
        }, duration);
    }

    function goToNextQuestion() {
        currentQuestionIndex++;
        if (currentQuestionIndex < gkQuestions.length) {
            loadQuestion(currentQuestionIndex);
        } else {
            endQuiz();
        }
    }

    function startQuestionTimer() {
        if (questionTimer && questionTimer.stopTimer) questionTimer.stopTimer();
        if (typeof initTimer === 'function') {
            questionTimer = initTimer(QUESTION_TIME, onTimeUp);
            if (questionTimer) questionTimer.startTimer();
        }
    }

    function onTimeUp() {
        const options = document.querySelectorAll('.option');
        options.forEach(opt => { opt.style.pointerEvents = 'none'; });

        const q = gkQuestions[currentQuestionIndex];
        if (options[q.correctAnswer]) options[q.correctAnswer].classList.add('correct');

        userAnswers[currentQuestionIndex] = -1;
        showFeedback(false, q.options[q.correctAnswer]);
        startAutoAdvance(2000);
    }

    function showFeedback(isCorrect, correctAnswer = null) {
        if (isCorrect) {
            feedbackElement.innerHTML = "Correct! 🎉";
            feedbackElement.className = 'feedback correct show';
            if (typeof playSound === 'function') playSound('correct');
            if (typeof createConfetti === 'function') createConfetti();
        } else {
            feedbackElement.innerHTML = correctAnswer
                ? `Incorrect. Correct answer: ${correctAnswer}`
                : "Time's up!";
            feedbackElement.className = 'feedback incorrect show';
            if (typeof playSound === 'function') playSound('incorrect');
        }
        renderMathJax([feedbackElement]);
    }

    function startQuizTimer() {
        let totalSeconds = TOTAL_TIME;

        const updateDisplay = () => {
            if (totalTimeElement) {
                totalTimeElement.textContent = (typeof formatTime === 'function')
                    ? formatTime(totalSeconds)
                    : `${Math.floor(totalSeconds / 60)}:${String(totalSeconds % 60).padStart(2, '0')}`;
            }
        };

        updateDisplay();
        if (quizTimerInterval) clearInterval(quizTimerInterval);

        quizTimerInterval = setInterval(() => {
            if (quizCompleted) {
                clearInterval(quizTimerInterval);
                return;
            }
            totalSeconds--;
            updateDisplay();
            if (totalSeconds <= 0) {
                clearInterval(quizTimerInterval);
                endQuiz();
            }
        }, 1000);
    }

    function updateQuestionCounter() {
        if (currentQuestionElement) {
            currentQuestionElement.textContent = `${currentQuestionIndex + 1}/${gkQuestions.length}`;
        }
    }

    function updateScore() {
        if (scoreElement) scoreElement.textContent = score;
    }

    function updateTotalTime() {
        if (totalTimeElement) {
            totalTimeElement.textContent = (typeof formatTime === 'function')
                ? formatTime(TOTAL_TIME)
                : '25:00';
        }
    }

    function updateProgressBar(current, total) {
        const progressBar =
            document.querySelector('#progress-fill') || document.querySelector('.progress');
        if (progressBar) {
            const percentage = (current / total) * 100;
            progressBar.style.width = `${percentage}%`;
        }
    }

    function endQuiz() {
        quizCompleted = true;

        if (questionTimer && questionTimer.stopTimer) questionTimer.stopTimer();
        if (autoAdvanceTimeout) clearTimeout(autoAdvanceTimeout);
        if (advanceProgressInterval) clearInterval(advanceProgressInterval);
        if (quizTimerInterval) clearInterval(quizTimerInterval);

        const quizDuration = Math.floor((Date.now() - quizStartTime) / 1000);
        const correctCount = score;
        const incorrectCount = gkQuestions.length - score;
        const percentage = Math.round((score / gkQuestions.length) * 100);

        if (finalScoreElement) finalScoreElement.textContent = `${score}/${gkQuestions.length}`;
        if (correctCountElement) correctCountElement.textContent = correctCount;
        if (incorrectCountElement) incorrectCountElement.textContent = incorrectCount;
        if (timeTakenElement) {
            timeTakenElement.textContent = (typeof formatTime === 'function')
                ? formatTime(quizDuration)
                : `${Math.floor(quizDuration / 60)}:${String(quizDuration % 60).padStart(2, '0')}`;
        }
        if (percentageElement) percentageElement.textContent = `${percentage}%`;

        let message = "";
        if (percentage >= 90) message = "Outstanding! You're an Electrodynamics genius! 🎉";
        else if (percentage >= 70) message = "Excellent work! You have great knowledge! 👍";
        else if (percentage >= 50) message = "Good job! You know quite a bit! 👏";
        else message = "Keep learning! You'll do better next time! 💪";

        if (resultMessageElement) resultMessageElement.textContent = message;

        const qc = document.querySelector('.question-container');
        const tc = document.querySelector('.timer-container');
        if (qc) qc.style.display = 'none';
        if (tc) tc.style.display = 'none';
        if (resultContainer) resultContainer.style.display = 'block';

        if (percentage >= 70 && typeof createConfetti === 'function') createConfetti();
    }

    if (restartBtn) restartBtn.addEventListener('click', initQuiz);
    if (homeBtn) homeBtn.addEventListener('click', () => { window.location.href = '/'; });

    initQuiz();
});


