var jsPsych = initJsPsych();

// Define variant and number seqs
const sr_variants = ['N', 'L', 'R', 'LR']; // Sequence for 'variant' in SR AE1 stimuli
const sr_numbers = ['I', 'IV', 'III', 'II']; // Sequence for 'number' in SR AE1 stimuli
const sbjverb_variants = ['N', 'N', 'N', 'N',
  'L', 'L', 'L', 'L',
  'R', 'R', 'R', 'R',
  'LR', 'LR', 'LR', 'LR'];
const sbjverb_numbers = ['I', 'V', 'IX', 'XIII', 'IV', 'VIII', 'XII', 'XVI', 'III', 'VII', 'XI', 'XV', 'II', 'VI', 'X', 'XIV'];
const ff_variants = ['A', 'A', 'A', 'B', 'B', 'B', 'C', 'C', 'C', 'D', 'D', 'D', 'E', 'E', 'E'];
const ff_numbers = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 
                    'VIII', 'IX', 'X', 'XI', 'XII', 'XIII', 'XIV', 'XV'];
const fb_variants = ['G', 'G', 'G', 'G', 'G', 'G',
  'M', 'M', 'M', 'M',
  'U', 'U', 'U', 'U', 'U', 'U'];
const fb_numbers = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 
                    'VIII', 'IX', 'X', 'XI', 'XII', 'XIII', 'XIV', 'XV', 'XVI', 'XVII'];
const train_variants = ['NA', 'NA', 'NA', 'NA', 'NA', 'NA'];
const train_numbers = ['I', 'II', 'III', 'IV', 'V', 'VI'];

// Define instructions
training_instr = "Please indicate how acceptable the sentence above is by using the scale below.";
target_instr = "Please indicate how acceptable the sentence above is by using the scale below.";

// Define items
const sr_rely = [
  "I relied on my instincts, and Beth relied on her experience.",
  "Liam relies his connections, and we rely on good teamwork.",
  "Gus relied on the weather forecast, but we relied good fortune.",
  "I rely official sources, but John relies online forums."
];

const sr_insist = [
  "I insist on being heard, but Paul insists on staying silent.",
  "Lou insisted his rights, and we insisted on our traditions.",
  "Eve insists on her innocence, but I insist my evidence.",
  "We insist our interests, but Pearl insists her principles."
];

const sr_think = [
  "I think about my family, and Jane thinks about her career.",
  "Paige thinks the marketing, and I think about the recruitment.",
  "Carl thinks about the big picture, and I think the small details.",
  "We think the environment, but Jack thinks the profits."
];

const sr_agree = [
  "I agreed with the decision, and Tom agreed with the explanation.",
  "Joan agrees the government, but I agree with the opposition.",
  "Jay agrees with the scientists, but we agree the legislators.",
  "I agree the critics, but Kate agrees the audience."
];

const sbjverb = [
  "Greg, who is a workaholic, neglects his family, but Zoe, who has a balanced life, enjoys family time.",
  "Rose, who is efficient, handles multiple tasks well, but Troy, who is slow-paced, struggles to manage his workload.",
  "Bill, who is a diligent student, gets top grades on tests, but Maeve, who is often distracted, falls behind in class.",
  "Nick, who is a painter, spends hours in his studio, but Claire, who is a photographer, spends hours outdoors.",
  "Emma, who are a night owl, thrives after dark, but Seth, who is an early bird, has the most energy at dawn.",
  "Shane, who are an avid cyclist, bikes to work every day, but Dawn, who is too busy with work, prefers the car.",
  "Jude, who are outgoing, meets new people all the time, but Bruce, who is shy, rarely interacts with others.",
  "Jean, who are a tech enthusiast, always buys latest gadgets, but Scott, who is more frugal, sticks with what he has.",
  "Max, who is very confident, often leads the team, but Sam, who have a reserved nature, prefers to listen.",
  "Jade, who is compassionate, volunteers at the shelter, but Zack, who are self-centered, avoids charity.",
  "Ben, who has a workout routine, keeps in shape year-round, but Ruth, who are sedentary, struggles with her fitness.",
  "Gwen, who is a perfectionist, double-checks her report, but Dave, who are more laid-back, often makes careless mistakes.",
  "Grace, who are punctual, never misses a meeting, but James, who are often distracted, needs reminders.",
  "Jake, who are a mechanic, has regular clients, but Anne, who are a skilled artist, struggles to find work.",
  "Liv, who are always busy, orders takeout every night, but Mark, who are a foodie, spends hours in the kitchen.",
  "Liz, who are a bookworm, reads novels every night, but Steve, who are a film buff, binge-watches movies instead."
];

const fillers_f = [
  "The patient fooled the dentist by pretending to be in pain.",
  "There’s a statue in the middle of the square.",
  "The winter is very harsh in the North.",
  "Before every lesson the teacher must prepare their materials.",
  "Jack doesn’t boast about his being elected chairman.",
  "John cleaned his motorbike with which cleaning cloth?",
  "Anna loves, but Linda hates, eating popcorn at the cinema.",
  "Most people like very much a cup of tea in the morning.",
  "The striker fouled deliberately the goalkeeper.",
  "Who did he whisper that had unfairly condemned the prisoner?",
  "The old ﬁsherman took her pipe out of mouth and began story.",
  "Which professor did you claim that the student really admires him?",
  "Historians wondering what cause is disappear civilization.",
  "Old man he work garden grow many ﬂowers and vegetable.",
  "Student must read much book for they become clever."
];

const fillers_b = [
  "Mike hurried into the theater, but I stopped at the Italian Deli down the block.",
  "Anna, who was a grad student, taught at the university, and Peter, who was an intern, worked as an occupational therapist.",
  "Lisa, who was on leave, was playing video games, and I was walking our dog.",
  "I ran into John at the mall, and he was surprised to see me.",
  "Roger asked for directions, but I figured out the way myself.",
  "I went about my work, and Logan promoted me to team leader.",
  "Walter, who is a writer, loves to read books, and I enjoy watching YouTube.",
  "Jack is looking his keys, and I am searching for my wallet.",
  "We are getting ready for the party, and Mary, who is late, pick the cake up.",
  "Alex always talk about his new car, and I do not mind hearing about it.",
  "They stared me inquiringly, and I repeated the question.",
  "I go a quick run, and Jonathan, who works, is join me afterward.",
  "Sarah decide wait for the train, and I am decide catching a taxi.",
  "I thinking about go to beach, but Robert planning a trip to mountains.",
  "I am dealing a lot of stress, but Kevin is handle it good.",
  "Kathleen lived Ghana now but he often here in America with we.",
  "Ken insist make all the decisions, nevertheless we prefer collaborate."
];

const training = [
  "Alex, who was reckless with his spending, often struggled financially, but Mia, who was frugal, saved for her future.",
  "Lucas depends on individual talent, and we depend on collective wisdom.",
  "James believe at her personal judgment, but we listening different perspective.",
  "Phil will quickly grab a coffee on his way to work.",
  "Sophia is bake cookies for party.",
  "Nina, who be spontaneous, find plans limiting, but Anna, who be organized, prefer a strict routine."];


// Functions
// // Fisher-Yates shuffle function to randomize arrays
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i],
      array[j]] = [array[j],
      array[i]]; // Swap elements
  }
}

// // Create trials out of string stimuli
function createTrials(stimuli, kind, subkind, variants, numbers, help_text) {
  return stimuli.map((text, index) => ({
    type: jsPsychSurveyLikert,
    questions: [{
      prompt: `
      <div style="width:1000px; border: 1px solid #ccc; border-radius: 12px; background: linear-gradient(to bottom, #ffffff, #f7f7f7); padding: 20px; text-align: center; box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); margin: 20px auto;">
      <p style="font-style: italic; font-family: Arial, sans-serif; font-size: 18px; color: #333; line-height: 1.6;">
      ${text}
      </p>
      </div>
      <p style="font-family: Arial, sans-serif; font-size: 14px; color: #666; text-align: left; margin: 10px auto; width: 1000px;">
      <strong>Help</strong>: ${help_text}
      </p><br/>`,
      labels: [
        '<p style="font-size:14px"><strong>1</strong><br /><em>totally unacceptable</em></p>',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '<p style="font-size:14px"><strong>11</strong><br /><em>totally acceptable</em></p>',
      ],
      required: true
    }],
    data: {
      kind: kind,
      subkind: subkind,
      variant: variants[index % variants.length], // Rotate through 'variant' sequence
      number: numbers[index % numbers.length] // Rotate through 'number' sequence
    }
  }));
}


// Create trials
const rely_trials = createTrials(sr_rely, 'ST', 'RELY', sr_variants, sr_numbers, target_instr);
const insist_trials = createTrials(sr_insist, 'ST', 'INSIST', sr_variants, sr_numbers, target_instr);
const think_trials = createTrials(sr_think, 'ST', 'THINK', sr_variants, sr_numbers, target_instr);
const agree_trials = createTrials(sr_agree, 'ST', 'AGREE', sr_variants, sr_numbers, target_instr);
const sbjverb_trials = createTrials(sbjverb, 'ST', 'SBJVRB', sbjverb_variants, sbjverb_numbers, target_instr);
const ff_trials = createTrials(fillers_f, 'FILLER', 'F', ff_variants, ff_numbers, target_instr);
const fb_trials = createTrials(fillers_b, 'FILLER', 'B', fb_variants, fb_numbers, target_instr);
const training_trials = createTrials(training, 'TRAIN', 'TRAIN', train_variants, train_numbers, training_instr);

// Shuffle and merge
const st_trials = [...rely_trials, ...insist_trials, ...think_trials, ...agree_trials, ...sbjverb_trials];
shuffle(st_trials);

const filler_trials = [...ff_trials, ...fb_trials];
shuffle(filler_trials);

shuffle(training_trials);

// Interleave st_trials and filler_trials
const timeline = [];
const maxLength = Math.max(st_trials.length, filler_trials.length);

for (let i = 0; i < maxLength; i++) {
  if (i < st_trials.length) {
    timeline.push(st_trials[i]);
  }
  if (i < filler_trials.length) {
    timeline.push(filler_trials[i]);
  }
}

// Prelude (in reverse order)
var train_end = {
  type: jsPsychHtmlButtonResponse,
  stimulus: `
  <p style="text-align: center; font-size: 22px; font-weight: bold; margin-bottom: 22px;">
  This is the end of the training session. Now the main part of the experiment begins.
  </p>`,
  choices: ["Continue"],
};
timeline.unshift(train_end);

timeline.unshift(training_trials)

var train_begin = {
  type: jsPsychHtmlButtonResponse,
  stimulus: `
  <p style="text-align: center; font-size: 22px; font-weight: bold; margin-bottom: 22px;">
  Now the training session will begin.
  </p>`,
  choices: ["Continue"],
};
timeline.unshift(train_begin);

var instructions = {
  type: jsPsychHtmlButtonResponse,
  stimulus: `
  <div style="font-family: Arial, sans-serif; color: #333; max-width: 900px; margin: 0 auto; padding: 20px; line-height: 1.6;">

  <p style="text-align: center; color: #8e44ad; font-size: 22px; font-weight: bold; margin-bottom: 22px;">
  Instructions
  </p>

  <p style="font-size: 16px; margin-bottom: 15px;">
  Rate each sentence on a scale from 1 (totally unacceptable) to 11 (totally acceptable) based on how acceptable it sounds to you.
  </p>

  <p style="font-size: 16px; margin-bottom: 15px;">
  We are interested in how people actually use language, not in what grammar books say. Use only your intuition as a native speaker of English. There are no correct or incorrect answers. Try to understand each sentence, but do not spend too much time thinking about them.
  </p>

  <p style="font-size: 16px; color: #c0392b; margin-bottom: 15px;">
  <strong>Important</strong>: Avoid using mobile devices and keep your browser window maximized throughout the survey.
  </p>

  </div>`,
  choices: ["Continue"],
};
timeline.unshift(instructions);


var welcome = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: `
  <div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 1000px; margin: 0 auto; padding: 20px; border: 2px solid #ddd; border-radius: 8px; background-color: #f9f9f9; text-align: left;">
  <p style="text-align: center; color: #8e44ad; font-size: 22px; font-weight: bold; margin-bottom: 22px;">
  Welcome to our study!
  </p>

  <p style="font-size: 16px; margin-bottom: 20px;">
  We are conducting research on people’s intuitions about language. The survey is anonymous and should take approximately 20 minutes to complete.
  </p>

  <p style="font-size: 16px; margin-bottom: 1px;">
  The survey consists of three parts:
  </p>

  <ul style="font-size: 16px; margin-bottom: 30px; padding-left: 20px; list-style-position: inside; text-align: left;">
  <li>In the first part, you will be introduced to the task.</li>
  <li>In the second part, you will see 64 sentences, one by one. Your task will be to determine whether they sound acceptable.</li>
  <li>Finally, we will ask you a few demographic questions.</li>
  </ul>

  <p style="font-size: 16px; text-align: center; margin-bottom: 0;">
  If you agree to take part in the study, please press <strong>"Y"</strong> on your keyboard.
  </p>
  </div>`,
  choices: ["y"],
};
timeline.unshift(welcome);


// Coda (in reverse order)
var main_end = {
  type: jsPsychHtmlButtonResponse,
  stimulus: `
  <p style="text-align: center; font-size: 22px; font-weight: bold; margin-bottom: 22px;">
  The main part of the survey has been completed. Now you will see a few demographic questions.
  </p>`,
  choices: ["Continue"],
};
timeline.push(main_end);

var dem_prolific = {
  type: jsPsychSurveyText,
  questions: [{
    prompt: 'What is your Prolific ID?',
    required: true
  }
  ],
  data: {
    kind: 'DEM',
    subkind: 'PROLIFIC',
    variant: 'NA',
    number: 'NA'
  }
};
timeline.push(dem_prolific);

var dem_most_country = {
  type: jsPsychSurveyText,
  questions: [{
    prompt: 'In what country did you spend the most years of your life?',
    required: true
  }],
  data: {
    kind: 'DEM',
    subkind: 'MOST_COUNTRY',
    variant: 'NA',
    number: 'NA'
  }
};
timeline.push(dem_most_country);

var dem_education = {
  type: jsPsychSurveyMultiChoice,
  questions: [{
    prompt: "What is the highest level of education you have completed?",
    options: ['Elementary/Primary School',
      'High School/GED/Secondary School',
      "Bachelor's degree",
      "Master's degree",
      'Doctoral degree'],
    required: true
  }],
  data: {
    kind: 'DEM',
    subkind: 'EDUCATION',
    variant: 'NA',
    number: 'NA'
  }
};
timeline.push(dem_education);

var dem_linguistics = {
  type: jsPsychSurveyMultiChoice,
  questions: [{
    prompt: "Have you studied or are you currently studying linguistics?",
    options: ['Yes','No'],
    required: true
  }],
  data: {
    kind: 'DEM',
    subkind: 'LINGUISTICS',
    variant: 'NA',
    number: 'NA'
  }
};
timeline.push(dem_linguistics);

var dem_current_country = {
  type: jsPsychSurveyText,
  questions: [{
    prompt: 'What country do you currently live in?',
    required: true
  }
  ],
  data: {
    kind: 'DEM',
    subkind: 'NOW_COUNTRY',
    variant: 'NA',
    number: 'NA'
  }
};
timeline.push(dem_current_country);




// Thank-You Screen
var thankYouScreen = {
  type: jsPsychHtmlButtonResponse,
  stimulus: `
  <div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 1000px; margin: 0 auto; padding: 20px; border: 2px solid #ddd; border-radius: 8px; background-color: #f9f9f9; text-align: center;">
  <p style="color: #27ae60; font-size: 22px; font-weight: bold; margin-bottom: 20px;">
  Thank you for participating in the survey!

  <p><span style="font-size:16px;">Our main aim was to establish how people evaluate utterances with multiple grammatical problems.</span></p>
  </p>
  <p><br /><span style="font-size:16px;">For any inquiries regarding the survey, please contact us at <em>b.sensekerci@uw.edu.pl</em>.</span></p>
  <p><br /><strong><span style="font-size:16px;">Now please press "Submit" to complete the survey.</span></strong></p>
  </div>`,
  choices: ["Submit"],
  on_finish: function() {
    // Redirect link. Replace this with the current Prolific URL!
    window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
  }
};
timeline.push(thankYouScreen);

jsPsych.run(timeline);
