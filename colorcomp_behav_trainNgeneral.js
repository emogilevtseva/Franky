/************************** 
 * Colorcomp_Trial_2 *
 **************************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2026.1.1.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'colorcomp_trial_2';  // from the Builder filename that created this script
let expInfo = {
    'participant': '',
};
let PILOTING = util.getUrlParameters().has('__pilotToken');

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color('black'),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(helloRoutineBegin());
flowScheduler.add(helloRoutineEachFrame());
flowScheduler.add(helloRoutineEnd());
flowScheduler.add(settingsRoutineBegin());
flowScheduler.add(settingsRoutineEachFrame());
flowScheduler.add(settingsRoutineEnd());
flowScheduler.add(instrRoutineBegin());
flowScheduler.add(instrRoutineEachFrame());
flowScheduler.add(instrRoutineEnd());
const trainingLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trainingLoopBegin(trainingLoopScheduler));
flowScheduler.add(trainingLoopScheduler);
flowScheduler.add(trainingLoopEnd);






flowScheduler.add(instr2RoutineBegin());
flowScheduler.add(instr2RoutineEachFrame());
flowScheduler.add(instr2RoutineEnd());
const stageLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(stageLoopBegin(stageLoopScheduler));
flowScheduler.add(stageLoopScheduler);
flowScheduler.add(stageLoopEnd);





flowScheduler.add(instrtuction_2RoutineBegin());
flowScheduler.add(instrtuction_2RoutineEachFrame());
flowScheduler.add(instrtuction_2RoutineEnd());
const one_repeat_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(one_repeat_loopLoopBegin(one_repeat_loopLoopScheduler));
flowScheduler.add(one_repeat_loopLoopScheduler);
flowScheduler.add(one_repeat_loopLoopEnd);



const two_repeatLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(two_repeatLoopBegin(two_repeatLoopScheduler));
flowScheduler.add(two_repeatLoopScheduler);
flowScheduler.add(two_repeatLoopEnd);



flowScheduler.add(answrita1RoutineBegin());
flowScheduler.add(answrita1RoutineEachFrame());
flowScheduler.add(answrita1RoutineEnd());
const three_repeatLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(three_repeatLoopBegin(three_repeatLoopScheduler));
flowScheduler.add(three_repeatLoopScheduler);
flowScheduler.add(three_repeatLoopEnd);



const four_repeatLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(four_repeatLoopBegin(four_repeatLoopScheduler));
flowScheduler.add(four_repeatLoopScheduler);
flowScheduler.add(four_repeatLoopEnd);



flowScheduler.add(answrita1RoutineBegin());
flowScheduler.add(answrita1RoutineEachFrame());
flowScheduler.add(answrita1RoutineEnd());
const five_repeatLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(five_repeatLoopBegin(five_repeatLoopScheduler));
flowScheduler.add(five_repeatLoopScheduler);
flowScheduler.add(five_repeatLoopEnd);



const sex_repeatLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(sex_repeatLoopBegin(sex_repeatLoopScheduler));
flowScheduler.add(sex_repeatLoopScheduler);
flowScheduler.add(sex_repeatLoopEnd);



const seven_repeatLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(seven_repeatLoopBegin(seven_repeatLoopScheduler));
flowScheduler.add(seven_repeatLoopScheduler);
flowScheduler.add(seven_repeatLoopEnd);



flowScheduler.add(answrita1RoutineBegin());
flowScheduler.add(answrita1RoutineEachFrame());
flowScheduler.add(answrita1RoutineEnd());
flowScheduler.add(hankRoutineBegin());
flowScheduler.add(hankRoutineEachFrame());
flowScheduler.add(hankRoutineEnd());
flowScheduler.add(dfgdfgRoutineBegin());
flowScheduler.add(dfgdfgRoutineEachFrame());
flowScheduler.add(dfgdfgRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'condition_RGB_easylowhard_train.xlsx', 'path': 'condition_RGB_easylowhard_train.xlsx'},
    {'name': 'condition_RGB_easylowhard_general.xlsx', 'path': 'condition_RGB_easylowhard_general.xlsx'},
    {'name': 'Первая буква!.xlsx', 'path': 'Первая буква!.xlsx'},
    {'name': 'Вторая буква.xlsx', 'path': 'Вторая буква.xlsx'},
    {'name': 'Третья буква.xlsx', 'path': 'Третья буква.xlsx'},
    {'name': 'Четвертая буква.xlsx', 'path': 'Четвертая буква.xlsx'},
    {'name': 'Пятая буква.xlsx', 'path': 'Пятая буква.xlsx'},
    {'name': 'Шестая буква.xlsx', 'path': 'Шестая буква.xlsx'},
    {'name': 'седьмая буква.xlsx', 'path': 'седьмая буква.xlsx'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2026.1.1';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var helloClock;
var hello_text;
var hello_keypress;
var settingsClock;
var settings_toptxt;
var settings_bottomtxt;
var settings_color1;
var settings_color2;
var settings_keypress;
var instrClock;
var instr_text;
var instr_resp;
var CC_trialClock;
var clr1examp;
var clr2examp;
var clr3examp;
var clr4examp;
var clr1trial;
var clr2trail;
var clr3trail;
var clr4trail;
var key_skip;
var MASKclr1tr;
var MASKclr2tr;
var MASKclr3tr;
var MASKclr4tr;
var blankClock;
var fix;
var CC_trainAnswClock;
var l_point_2;
var r_point_2;
var CC_resp_2;
var l_hint;
var r_hint;
var FBClock;
var msg;
var try_corr;
var FB_text_2;
var clractual;
var instr2Clock;
var final_corr;
var train_txt;
var text;
var key_resp;
var CC_answerClock;
var l_point;
var r_point;
var CC_resp;
var instrtuction_2Clock;
var text_2;
var key_resp_2;
var expritaClock;
var math_pro;
var math_resp;
var let_2Clock;
var text_3;
var answrita1Clock;
var recall_instr;
var recall_input;
var hankClock;
var text_4;
var key_resp_3;
var dfgdfgClock;
var text_5;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "hello"
  helloClock = new util.Clock();
  hello_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'hello_text',
    text: 'Спасибо, что участвуете в исследовании!\n\nТак как вы проходите эксперимент на компьютере, перед началом необходимо настроить ваш экран.\n\nЧтобы продолжить, нажмите ПРОБЕЛ.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  hello_keypress = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "settings"
  settingsClock = new util.Clock();
  settings_toptxt = new visual.TextStim({
    win: psychoJS.window,
    name: 'settings_toptxt',
    text: 'Пожалуйста, выстроите яркость экрана так, чтобы комфортно видеть разницу между оттенками ниже.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.25], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  settings_bottomtxt = new visual.TextStim({
    win: psychoJS.window,
    name: 'settings_bottomtxt',
    text: 'Когда будете готовы, нажмите ПРОБЕЛ.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.25)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  settings_color1 = new visual.Rect ({
    win: psychoJS.window, name: 'settings_color1', 
    width: [0.1, 0.1][0], height: [0.1, 0.1][1],
    ori: 0.0, 
    pos: [(- 0.1), 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color([0.6, 0.6, 0.6]), 
    colorSpace: 'rgb', 
    opacity: 0.3, 
    depth: -2, 
    interpolate: true, 
  });
  
  settings_color2 = new visual.Rect ({
    win: psychoJS.window, name: 'settings_color2', 
    width: [0.1, 0.1][0], height: [0.1, 0.1][1],
    ori: 0.0, 
    pos: [0.1, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color([0.8, 0.8, 0.8]), 
    colorSpace: 'rgb', 
    opacity: 0.3, 
    depth: -3, 
    interpolate: true, 
  });
  
  settings_keypress = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instr"
  instrClock = new util.Clock();
  instr_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'instr_text',
    text: 'Вам будет показаны 2 последовательности цветных квадратов, сделанных по аналогии друг другу. Они будут появляться друг за другом, сначала полная, потом — с одним пропущенным, черным, квадратом.\n \nВам нужно представить недостающий цвет согласно последовательности и выбрать тот квадрат из представленных двух вариантов, который соответствует представленному цвету.\nВыбор нужного квадрата производится клавишами "←" и "→". На этапе тренировки у вас будут подсказки по клавишам под вариантами ответа.\n\nЧтобы начать тренировку, нажмите ПРОБЕЛ.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  instr_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "CC_trial"
  CC_trialClock = new util.Clock();
  clr1examp = new visual.Rect ({
    win: psychoJS.window, name: 'clr1examp', 
    width: [0.1, 0.1][0], height: [0.1, 0.1][1],
    ori: 0.0, 
    pos: [(- 0.3375), 0.075], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: 0, 
    interpolate: true, 
  });
  
  clr2examp = new visual.Rect ({
    win: psychoJS.window, name: 'clr2examp', 
    width: [0.1, 0.1][0], height: [0.1, 0.1][1],
    ori: 0.0, 
    pos: [(- 0.1125), 0.075], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -1, 
    interpolate: true, 
  });
  
  clr3examp = new visual.Rect ({
    win: psychoJS.window, name: 'clr3examp', 
    width: [0.1, 0.1][0], height: [0.1, 0.1][1],
    ori: 0.0, 
    pos: [0.1125, 0.075], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -2, 
    interpolate: true, 
  });
  
  clr4examp = new visual.Rect ({
    win: psychoJS.window, name: 'clr4examp', 
    width: [0.1, 0.1][0], height: [0.1, 0.1][1],
    ori: 0.0, 
    pos: [0.3375, 0.075], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -3, 
    interpolate: true, 
  });
  
  clr1trial = new visual.Rect ({
    win: psychoJS.window, name: 'clr1trial', 
    width: [0.1, 0.1][0], height: [0.1, 0.1][1],
    ori: 0.0, 
    pos: [(- 0.3375), (- 0.1)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -4, 
    interpolate: true, 
  });
  
  clr2trail = new visual.Rect ({
    win: psychoJS.window, name: 'clr2trail', 
    width: [0.1, 0.1][0], height: [0.1, 0.1][1],
    ori: 0.0, 
    pos: [(- 0.1125), (- 0.1)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -5, 
    interpolate: true, 
  });
  
  clr3trail = new visual.Rect ({
    win: psychoJS.window, name: 'clr3trail', 
    width: [0.1, 0.1][0], height: [0.1, 0.1][1],
    ori: 0.0, 
    pos: [0.1125, (- 0.1)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -6, 
    interpolate: true, 
  });
  
  clr4trail = new visual.Rect ({
    win: psychoJS.window, name: 'clr4trail', 
    width: [0.1, 0.1][0], height: [0.1, 0.1][1],
    ori: 0.0, 
    pos: [0.3375, (- 0.1)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -7, 
    interpolate: true, 
  });
  
  key_skip = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  MASKclr1tr = new visual.Rect ({
    win: psychoJS.window, name: 'MASKclr1tr', 
    width: [0.1, 0.1][0], height: [0.1, 0.1][1],
    ori: 0.0, 
    pos: [(- 0.3375), (- 0.1)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -9, 
    interpolate: true, 
  });
  
  MASKclr2tr = new visual.Rect ({
    win: psychoJS.window, name: 'MASKclr2tr', 
    width: [0.1, 0.1][0], height: [0.1, 0.1][1],
    ori: 0.0, 
    pos: [(- 0.1125), (- 0.1)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -10, 
    interpolate: true, 
  });
  
  MASKclr3tr = new visual.Rect ({
    win: psychoJS.window, name: 'MASKclr3tr', 
    width: [0.1, 0.1][0], height: [0.1, 0.1][1],
    ori: 0.0, 
    pos: [0.1125, (- 0.1)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -11, 
    interpolate: true, 
  });
  
  MASKclr4tr = new visual.Rect ({
    win: psychoJS.window, name: 'MASKclr4tr', 
    width: [0.1, 0.1][0], height: [0.1, 0.1][1],
    ori: 0.0, 
    pos: [0.3375, (- 0.1)], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -12, 
    interpolate: true, 
  });
  
  // Initialize components for Routine "blank"
  blankClock = new util.Clock();
  fix = new visual.ShapeStim ({
    win: psychoJS.window, name: 'fix', 
    vertices: 'cross', size:[0.08, 0.08],
    ori: 0.0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: 0, 
    interpolate: true, 
  });
  
  // Initialize components for Routine "CC_trainAnsw"
  CC_trainAnswClock = new util.Clock();
  l_point_2 = new visual.Rect ({
    win: psychoJS.window, name: 'l_point_2', 
    width: [0.1, 0.1][0], height: [0.1, 0.1][1],
    ori: 0.0, 
    pos: [(- 0.2), 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: 0, 
    interpolate: true, 
  });
  
  r_point_2 = new visual.Rect ({
    win: psychoJS.window, name: 'r_point_2', 
    width: [0.1, 0.1][0], height: [0.1, 0.1][1],
    ori: 0.0, 
    pos: [0.2, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -1, 
    interpolate: true, 
  });
  
  CC_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  l_hint = new visual.TextStim({
    win: psychoJS.window,
    name: 'l_hint',
    text: '←',
    font: 'Open Sans',
    units: undefined, 
    pos: [(- 0.2), (- 0.2)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  r_hint = new visual.TextStim({
    win: psychoJS.window,
    name: 'r_hint',
    text: '→',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.2, (- 0.2)], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  // Initialize components for Routine "FB"
  FBClock = new util.Clock();
  // Run 'Begin Experiment' code from FB_code_2
  msg = "empty!";
  try_corr = 0;
  
  FB_text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'FB_text_2',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.2], draggable: false, height: 0.1,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  clractual = new visual.Rect ({
    win: psychoJS.window, name: 'clractual', 
    width: [0.1, 0.1][0], height: [0.1, 0.1][1],
    ori: 0.0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -2, 
    interpolate: true, 
  });
  
  // Initialize components for Routine "instr2"
  instr2Clock = new util.Clock();
  // Run 'Begin Experiment' code from correct_FB
  final_corr = 0;
  train_txt = "no text";
  
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "CC_answer"
  CC_answerClock = new util.Clock();
  l_point = new visual.Rect ({
    win: psychoJS.window, name: 'l_point', 
    width: [0.1, 0.1][0], height: [0.1, 0.1][1],
    ori: 0.0, 
    pos: [(- 0.2), 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: 0, 
    interpolate: true, 
  });
  
  r_point = new visual.Rect ({
    win: psychoJS.window, name: 'r_point', 
    width: [0.1, 0.1][0], height: [0.1, 0.1][1],
    ori: 0.0, 
    pos: [0.2, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 1.0, 
    lineColor: new util.Color('white'), 
    fillColor: new util.Color('white'), 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -1, 
    interpolate: true, 
  });
  
  CC_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "instrtuction_2"
  instrtuction_2Clock = new util.Clock();
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: 'В рамках этой части эксперимента Вам будут предоставлены для решения арифметические задачи на сложение/вычетание и умножение/деление. Ваша задача — как можно быстрее и точнее определить, верно ли решение:\n\nНажмите 1, если ответ верный.\n\nНажмите 2, если ответ неверный.\nПосле каждой задачи на экране появится буква (например, F). Запомните её.\n\nВ конце серии (после 3–5 задач) вам нужно будет:\n\nВвести букву, которую Вы запомнили раннее. \n\nДля начала эксперимента нажмите ПРОБЕЛ',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "exprita"
  expritaClock = new util.Clock();
  math_pro = new visual.TextStim({
    win: psychoJS.window,
    name: 'math_pro',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  math_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "let_2"
  let_2Clock = new util.Clock();
  text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_3',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "answrita1"
  answrita1Clock = new util.Clock();
  recall_instr = new visual.TextStim({
    win: psychoJS.window,
    name: 'recall_instr',
    text: 'Внимание!\nВведите все буквы, которые вы запомнили, в правильном порядке. \n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  recall_input = new visual.TextBox({
    win: psychoJS.window,
    name: 'recall_input',
    text: '',
    placeholder: 'undefined',
    font: 'Arial',
    pos: [0, 0], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [0.5, 0.5],  units: undefined, 
    ori: 0.0,
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -1.0 
  });
  
  // Initialize components for Routine "hank"
  hankClock = new util.Clock();
  text_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_4',
    text: 'Спасибо за участие! \nНажмите пробел...',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "dfgdfg"
  dfgdfgClock = new util.Clock();
  text_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_5',
    text: 'Подождите, идет запись эксперимента...\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var routineForceEnded;
var helloMaxDurationReached;
var _hello_keypress_allKeys;
var helloMaxDuration;
var helloComponents;
function helloRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'hello' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    helloClock.reset();
    routineTimer.reset();
    helloMaxDurationReached = false;
    // update component parameters for each repeat
    hello_keypress.keys = undefined;
    hello_keypress.rt = undefined;
    _hello_keypress_allKeys = [];
    psychoJS.experiment.addData('hello.started', globalClock.getTime());
    helloMaxDuration = null
    // keep track of which components have finished
    helloComponents = [];
    helloComponents.push(hello_text);
    helloComponents.push(hello_keypress);
    
    for (const thisComponent of helloComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function helloRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'hello' ---
    // get current time
    t = helloClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *hello_text* updates
    if (t >= 0.0 && hello_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      hello_text.tStart = t;  // (not accounting for frame time here)
      hello_text.frameNStart = frameN;  // exact frame index
      
      hello_text.setAutoDraw(true);
    }
    
    
    // if hello_text is active this frame...
    if (hello_text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *hello_keypress* updates
    if (t >= 0.0 && hello_keypress.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      hello_keypress.tStart = t;  // (not accounting for frame time here)
      hello_keypress.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { hello_keypress.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { hello_keypress.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { hello_keypress.clearEvents(); });
    }
    
    // if hello_keypress is active this frame...
    if (hello_keypress.status === PsychoJS.Status.STARTED) {
      let theseKeys = hello_keypress.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _hello_keypress_allKeys = _hello_keypress_allKeys.concat(theseKeys);
      if (_hello_keypress_allKeys.length > 0) {
        hello_keypress.keys = _hello_keypress_allKeys[_hello_keypress_allKeys.length - 1].name;  // just the last key pressed
        hello_keypress.rt = _hello_keypress_allKeys[_hello_keypress_allKeys.length - 1].rt;
        hello_keypress.duration = _hello_keypress_allKeys[_hello_keypress_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of helloComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function helloRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'hello' ---
    for (const thisComponent of helloComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('hello.stopped', globalClock.getTime());
    hello_keypress.stop();
    // the Routine "hello" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var settingsMaxDurationReached;
var _settings_keypress_allKeys;
var settingsMaxDuration;
var settingsComponents;
function settingsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'settings' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    settingsClock.reset();
    routineTimer.reset();
    settingsMaxDurationReached = false;
    // update component parameters for each repeat
    settings_keypress.keys = undefined;
    settings_keypress.rt = undefined;
    _settings_keypress_allKeys = [];
    psychoJS.experiment.addData('settings.started', globalClock.getTime());
    settingsMaxDuration = null
    // keep track of which components have finished
    settingsComponents = [];
    settingsComponents.push(settings_toptxt);
    settingsComponents.push(settings_bottomtxt);
    settingsComponents.push(settings_color1);
    settingsComponents.push(settings_color2);
    settingsComponents.push(settings_keypress);
    
    for (const thisComponent of settingsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function settingsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'settings' ---
    // get current time
    t = settingsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *settings_toptxt* updates
    if (t >= 0.0 && settings_toptxt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      settings_toptxt.tStart = t;  // (not accounting for frame time here)
      settings_toptxt.frameNStart = frameN;  // exact frame index
      
      settings_toptxt.setAutoDraw(true);
    }
    
    
    // if settings_toptxt is active this frame...
    if (settings_toptxt.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *settings_bottomtxt* updates
    if (t >= 0.0 && settings_bottomtxt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      settings_bottomtxt.tStart = t;  // (not accounting for frame time here)
      settings_bottomtxt.frameNStart = frameN;  // exact frame index
      
      settings_bottomtxt.setAutoDraw(true);
    }
    
    
    // if settings_bottomtxt is active this frame...
    if (settings_bottomtxt.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *settings_color1* updates
    if (t >= 0.0 && settings_color1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      settings_color1.tStart = t;  // (not accounting for frame time here)
      settings_color1.frameNStart = frameN;  // exact frame index
      
      settings_color1.setAutoDraw(true);
    }
    
    
    // if settings_color1 is active this frame...
    if (settings_color1.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *settings_color2* updates
    if (t >= 0.0 && settings_color2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      settings_color2.tStart = t;  // (not accounting for frame time here)
      settings_color2.frameNStart = frameN;  // exact frame index
      
      settings_color2.setAutoDraw(true);
    }
    
    
    // if settings_color2 is active this frame...
    if (settings_color2.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *settings_keypress* updates
    if (t >= 0.0 && settings_keypress.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      settings_keypress.tStart = t;  // (not accounting for frame time here)
      settings_keypress.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { settings_keypress.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { settings_keypress.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { settings_keypress.clearEvents(); });
    }
    
    // if settings_keypress is active this frame...
    if (settings_keypress.status === PsychoJS.Status.STARTED) {
      let theseKeys = settings_keypress.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _settings_keypress_allKeys = _settings_keypress_allKeys.concat(theseKeys);
      if (_settings_keypress_allKeys.length > 0) {
        settings_keypress.keys = _settings_keypress_allKeys[_settings_keypress_allKeys.length - 1].name;  // just the last key pressed
        settings_keypress.rt = _settings_keypress_allKeys[_settings_keypress_allKeys.length - 1].rt;
        settings_keypress.duration = _settings_keypress_allKeys[_settings_keypress_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of settingsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function settingsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'settings' ---
    for (const thisComponent of settingsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('settings.stopped', globalClock.getTime());
    settings_keypress.stop();
    // the Routine "settings" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var instrMaxDurationReached;
var _instr_resp_allKeys;
var instrMaxDuration;
var instrComponents;
function instrRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instr' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    instrClock.reset();
    routineTimer.reset();
    instrMaxDurationReached = false;
    // update component parameters for each repeat
    instr_resp.keys = undefined;
    instr_resp.rt = undefined;
    _instr_resp_allKeys = [];
    psychoJS.experiment.addData('instr.started', globalClock.getTime());
    instrMaxDuration = null
    // keep track of which components have finished
    instrComponents = [];
    instrComponents.push(instr_text);
    instrComponents.push(instr_resp);
    
    for (const thisComponent of instrComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instrRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instr' ---
    // get current time
    t = instrClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instr_text* updates
    if (t >= 0.0 && instr_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_text.tStart = t;  // (not accounting for frame time here)
      instr_text.frameNStart = frameN;  // exact frame index
      
      instr_text.setAutoDraw(true);
    }
    
    
    // if instr_text is active this frame...
    if (instr_text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *instr_resp* updates
    if (t >= 0.0 && instr_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr_resp.tStart = t;  // (not accounting for frame time here)
      instr_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { instr_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { instr_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { instr_resp.clearEvents(); });
    }
    
    // if instr_resp is active this frame...
    if (instr_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = instr_resp.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _instr_resp_allKeys = _instr_resp_allKeys.concat(theseKeys);
      if (_instr_resp_allKeys.length > 0) {
        instr_resp.keys = _instr_resp_allKeys[_instr_resp_allKeys.length - 1].name;  // just the last key pressed
        instr_resp.rt = _instr_resp_allKeys[_instr_resp_allKeys.length - 1].rt;
        instr_resp.duration = _instr_resp_allKeys[_instr_resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instrComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instrRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instr' ---
    for (const thisComponent of instrComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('instr.stopped', globalClock.getTime());
    instr_resp.stop();
    // the Routine "instr" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var training;
function trainingLoopBegin(trainingLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    training = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'condition_RGB_easylowhard_train.xlsx',
      seed: undefined, name: 'training'
    });
    psychoJS.experiment.addLoop(training); // add the loop to the experiment
    currentLoop = training;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTraining of training) {
      snapshot = training.getSnapshot();
      trainingLoopScheduler.add(importConditions(snapshot));
      trainingLoopScheduler.add(CC_trialRoutineBegin(snapshot));
      trainingLoopScheduler.add(CC_trialRoutineEachFrame());
      trainingLoopScheduler.add(CC_trialRoutineEnd(snapshot));
      trainingLoopScheduler.add(blankRoutineBegin(snapshot));
      trainingLoopScheduler.add(blankRoutineEachFrame());
      trainingLoopScheduler.add(blankRoutineEnd(snapshot));
      trainingLoopScheduler.add(CC_trainAnswRoutineBegin(snapshot));
      trainingLoopScheduler.add(CC_trainAnswRoutineEachFrame());
      trainingLoopScheduler.add(CC_trainAnswRoutineEnd(snapshot));
      trainingLoopScheduler.add(FBRoutineBegin(snapshot));
      trainingLoopScheduler.add(FBRoutineEachFrame());
      trainingLoopScheduler.add(FBRoutineEnd(snapshot));
      trainingLoopScheduler.add(blankRoutineBegin(snapshot));
      trainingLoopScheduler.add(blankRoutineEachFrame());
      trainingLoopScheduler.add(blankRoutineEnd(snapshot));
      trainingLoopScheduler.add(trainingLoopEndIteration(trainingLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trainingLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(training);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trainingLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var stage;
function stageLoopBegin(stageLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    stage = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'condition_RGB_easylowhard_general.xlsx',
      seed: undefined, name: 'stage'
    });
    psychoJS.experiment.addLoop(stage); // add the loop to the experiment
    currentLoop = stage;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisStage of stage) {
      snapshot = stage.getSnapshot();
      stageLoopScheduler.add(importConditions(snapshot));
      stageLoopScheduler.add(CC_trialRoutineBegin(snapshot));
      stageLoopScheduler.add(CC_trialRoutineEachFrame());
      stageLoopScheduler.add(CC_trialRoutineEnd(snapshot));
      stageLoopScheduler.add(blankRoutineBegin(snapshot));
      stageLoopScheduler.add(blankRoutineEachFrame());
      stageLoopScheduler.add(blankRoutineEnd(snapshot));
      stageLoopScheduler.add(CC_answerRoutineBegin(snapshot));
      stageLoopScheduler.add(CC_answerRoutineEachFrame());
      stageLoopScheduler.add(CC_answerRoutineEnd(snapshot));
      stageLoopScheduler.add(blankRoutineBegin(snapshot));
      stageLoopScheduler.add(blankRoutineEachFrame());
      stageLoopScheduler.add(blankRoutineEnd(snapshot));
      stageLoopScheduler.add(stageLoopEndIteration(stageLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function stageLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(stage);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function stageLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var one_repeat_loop;
function one_repeat_loopLoopBegin(one_repeat_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    one_repeat_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'Первая буква!.xlsx',
      seed: undefined, name: 'one_repeat_loop'
    });
    psychoJS.experiment.addLoop(one_repeat_loop); // add the loop to the experiment
    currentLoop = one_repeat_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisOne_repeat_loop of one_repeat_loop) {
      snapshot = one_repeat_loop.getSnapshot();
      one_repeat_loopLoopScheduler.add(importConditions(snapshot));
      one_repeat_loopLoopScheduler.add(expritaRoutineBegin(snapshot));
      one_repeat_loopLoopScheduler.add(expritaRoutineEachFrame());
      one_repeat_loopLoopScheduler.add(expritaRoutineEnd(snapshot));
      one_repeat_loopLoopScheduler.add(let_2RoutineBegin(snapshot));
      one_repeat_loopLoopScheduler.add(let_2RoutineEachFrame());
      one_repeat_loopLoopScheduler.add(let_2RoutineEnd(snapshot));
      one_repeat_loopLoopScheduler.add(one_repeat_loopLoopEndIteration(one_repeat_loopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function one_repeat_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(one_repeat_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function one_repeat_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var two_repeat;
function two_repeatLoopBegin(two_repeatLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    two_repeat = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'Вторая буква.xlsx',
      seed: undefined, name: 'two_repeat'
    });
    psychoJS.experiment.addLoop(two_repeat); // add the loop to the experiment
    currentLoop = two_repeat;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTwo_repeat of two_repeat) {
      snapshot = two_repeat.getSnapshot();
      two_repeatLoopScheduler.add(importConditions(snapshot));
      two_repeatLoopScheduler.add(expritaRoutineBegin(snapshot));
      two_repeatLoopScheduler.add(expritaRoutineEachFrame());
      two_repeatLoopScheduler.add(expritaRoutineEnd(snapshot));
      two_repeatLoopScheduler.add(let_2RoutineBegin(snapshot));
      two_repeatLoopScheduler.add(let_2RoutineEachFrame());
      two_repeatLoopScheduler.add(let_2RoutineEnd(snapshot));
      two_repeatLoopScheduler.add(two_repeatLoopEndIteration(two_repeatLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function two_repeatLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(two_repeat);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function two_repeatLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var three_repeat;
function three_repeatLoopBegin(three_repeatLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    three_repeat = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'Третья буква.xlsx',
      seed: undefined, name: 'three_repeat'
    });
    psychoJS.experiment.addLoop(three_repeat); // add the loop to the experiment
    currentLoop = three_repeat;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisThree_repeat of three_repeat) {
      snapshot = three_repeat.getSnapshot();
      three_repeatLoopScheduler.add(importConditions(snapshot));
      three_repeatLoopScheduler.add(expritaRoutineBegin(snapshot));
      three_repeatLoopScheduler.add(expritaRoutineEachFrame());
      three_repeatLoopScheduler.add(expritaRoutineEnd(snapshot));
      three_repeatLoopScheduler.add(let_2RoutineBegin(snapshot));
      three_repeatLoopScheduler.add(let_2RoutineEachFrame());
      three_repeatLoopScheduler.add(let_2RoutineEnd(snapshot));
      three_repeatLoopScheduler.add(three_repeatLoopEndIteration(three_repeatLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function three_repeatLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(three_repeat);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function three_repeatLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var four_repeat;
function four_repeatLoopBegin(four_repeatLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    four_repeat = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'Четвертая буква.xlsx',
      seed: undefined, name: 'four_repeat'
    });
    psychoJS.experiment.addLoop(four_repeat); // add the loop to the experiment
    currentLoop = four_repeat;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisFour_repeat of four_repeat) {
      snapshot = four_repeat.getSnapshot();
      four_repeatLoopScheduler.add(importConditions(snapshot));
      four_repeatLoopScheduler.add(expritaRoutineBegin(snapshot));
      four_repeatLoopScheduler.add(expritaRoutineEachFrame());
      four_repeatLoopScheduler.add(expritaRoutineEnd(snapshot));
      four_repeatLoopScheduler.add(let_2RoutineBegin(snapshot));
      four_repeatLoopScheduler.add(let_2RoutineEachFrame());
      four_repeatLoopScheduler.add(let_2RoutineEnd(snapshot));
      four_repeatLoopScheduler.add(four_repeatLoopEndIteration(four_repeatLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function four_repeatLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(four_repeat);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function four_repeatLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var five_repeat;
function five_repeatLoopBegin(five_repeatLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    five_repeat = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'Пятая буква.xlsx',
      seed: undefined, name: 'five_repeat'
    });
    psychoJS.experiment.addLoop(five_repeat); // add the loop to the experiment
    currentLoop = five_repeat;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisFive_repeat of five_repeat) {
      snapshot = five_repeat.getSnapshot();
      five_repeatLoopScheduler.add(importConditions(snapshot));
      five_repeatLoopScheduler.add(expritaRoutineBegin(snapshot));
      five_repeatLoopScheduler.add(expritaRoutineEachFrame());
      five_repeatLoopScheduler.add(expritaRoutineEnd(snapshot));
      five_repeatLoopScheduler.add(let_2RoutineBegin(snapshot));
      five_repeatLoopScheduler.add(let_2RoutineEachFrame());
      five_repeatLoopScheduler.add(let_2RoutineEnd(snapshot));
      five_repeatLoopScheduler.add(five_repeatLoopEndIteration(five_repeatLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function five_repeatLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(five_repeat);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function five_repeatLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var sex_repeat;
function sex_repeatLoopBegin(sex_repeatLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    sex_repeat = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'Шестая буква.xlsx',
      seed: undefined, name: 'sex_repeat'
    });
    psychoJS.experiment.addLoop(sex_repeat); // add the loop to the experiment
    currentLoop = sex_repeat;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisSex_repeat of sex_repeat) {
      snapshot = sex_repeat.getSnapshot();
      sex_repeatLoopScheduler.add(importConditions(snapshot));
      sex_repeatLoopScheduler.add(expritaRoutineBegin(snapshot));
      sex_repeatLoopScheduler.add(expritaRoutineEachFrame());
      sex_repeatLoopScheduler.add(expritaRoutineEnd(snapshot));
      sex_repeatLoopScheduler.add(let_2RoutineBegin(snapshot));
      sex_repeatLoopScheduler.add(let_2RoutineEachFrame());
      sex_repeatLoopScheduler.add(let_2RoutineEnd(snapshot));
      sex_repeatLoopScheduler.add(sex_repeatLoopEndIteration(sex_repeatLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function sex_repeatLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(sex_repeat);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function sex_repeatLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var seven_repeat;
function seven_repeatLoopBegin(seven_repeatLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    seven_repeat = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'седьмая буква.xlsx',
      seed: undefined, name: 'seven_repeat'
    });
    psychoJS.experiment.addLoop(seven_repeat); // add the loop to the experiment
    currentLoop = seven_repeat;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisSeven_repeat of seven_repeat) {
      snapshot = seven_repeat.getSnapshot();
      seven_repeatLoopScheduler.add(importConditions(snapshot));
      seven_repeatLoopScheduler.add(expritaRoutineBegin(snapshot));
      seven_repeatLoopScheduler.add(expritaRoutineEachFrame());
      seven_repeatLoopScheduler.add(expritaRoutineEnd(snapshot));
      seven_repeatLoopScheduler.add(let_2RoutineBegin(snapshot));
      seven_repeatLoopScheduler.add(let_2RoutineEachFrame());
      seven_repeatLoopScheduler.add(let_2RoutineEnd(snapshot));
      seven_repeatLoopScheduler.add(seven_repeatLoopEndIteration(seven_repeatLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function seven_repeatLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(seven_repeat);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function seven_repeatLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var CC_trialMaxDurationReached;
var _key_skip_allKeys;
var CC_trialMaxDuration;
var CC_trialComponents;
function CC_trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'CC_trial' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    CC_trialClock.reset(routineTimer.getTime());
    routineTimer.add(6.000000);
    CC_trialMaxDurationReached = false;
    // update component parameters for each repeat
    clr1examp.setFillColor(new util.Color(clr1p1));
    clr2examp.setFillColor(new util.Color(clr2p1));
    clr3examp.setFillColor(new util.Color(clr3p1));
    clr4examp.setFillColor(new util.Color(clr4p1));
    clr1trial.setFillColor(new util.Color(clr1p2));
    clr2trail.setFillColor(new util.Color(clr2p2));
    clr3trail.setFillColor(new util.Color(clr3p2));
    clr4trail.setFillColor(new util.Color(clr4p2));
    key_skip.keys = undefined;
    key_skip.rt = undefined;
    _key_skip_allKeys = [];
    MASKclr1tr.setFillColor(new util.Color('black'));
    MASKclr2tr.setFillColor(new util.Color('black'));
    MASKclr3tr.setFillColor(new util.Color('black'));
    MASKclr4tr.setFillColor(new util.Color('black'));
    psychoJS.experiment.addData('CC_trial.started', globalClock.getTime());
    CC_trialMaxDuration = null
    // keep track of which components have finished
    CC_trialComponents = [];
    CC_trialComponents.push(clr1examp);
    CC_trialComponents.push(clr2examp);
    CC_trialComponents.push(clr3examp);
    CC_trialComponents.push(clr4examp);
    CC_trialComponents.push(clr1trial);
    CC_trialComponents.push(clr2trail);
    CC_trialComponents.push(clr3trail);
    CC_trialComponents.push(clr4trail);
    CC_trialComponents.push(key_skip);
    CC_trialComponents.push(MASKclr1tr);
    CC_trialComponents.push(MASKclr2tr);
    CC_trialComponents.push(MASKclr3tr);
    CC_trialComponents.push(MASKclr4tr);
    
    for (const thisComponent of CC_trialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function CC_trialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'CC_trial' ---
    // get current time
    t = CC_trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *clr1examp* updates
    if (t >= 0.0 && clr1examp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      clr1examp.tStart = t;  // (not accounting for frame time here)
      clr1examp.frameNStart = frameN;  // exact frame index
      
      clr1examp.setAutoDraw(true);
    }
    
    
    // if clr1examp is active this frame...
    if (clr1examp.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 2.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (clr1examp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      clr1examp.tStop = t;  // not accounting for scr refresh
      clr1examp.frameNStop = frameN;  // exact frame index
      // update status
      clr1examp.status = PsychoJS.Status.FINISHED;
      clr1examp.setAutoDraw(false);
    }
    
    
    // *clr2examp* updates
    if (t >= 0.0 && clr2examp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      clr2examp.tStart = t;  // (not accounting for frame time here)
      clr2examp.frameNStart = frameN;  // exact frame index
      
      clr2examp.setAutoDraw(true);
    }
    
    
    // if clr2examp is active this frame...
    if (clr2examp.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 2.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (clr2examp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      clr2examp.tStop = t;  // not accounting for scr refresh
      clr2examp.frameNStop = frameN;  // exact frame index
      // update status
      clr2examp.status = PsychoJS.Status.FINISHED;
      clr2examp.setAutoDraw(false);
    }
    
    
    // *clr3examp* updates
    if (t >= 0.0 && clr3examp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      clr3examp.tStart = t;  // (not accounting for frame time here)
      clr3examp.frameNStart = frameN;  // exact frame index
      
      clr3examp.setAutoDraw(true);
    }
    
    
    // if clr3examp is active this frame...
    if (clr3examp.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 2.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (clr3examp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      clr3examp.tStop = t;  // not accounting for scr refresh
      clr3examp.frameNStop = frameN;  // exact frame index
      // update status
      clr3examp.status = PsychoJS.Status.FINISHED;
      clr3examp.setAutoDraw(false);
    }
    
    
    // *clr4examp* updates
    if (t >= 0.0 && clr4examp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      clr4examp.tStart = t;  // (not accounting for frame time here)
      clr4examp.frameNStart = frameN;  // exact frame index
      
      clr4examp.setAutoDraw(true);
    }
    
    
    // if clr4examp is active this frame...
    if (clr4examp.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 2.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (clr4examp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      clr4examp.tStop = t;  // not accounting for scr refresh
      clr4examp.frameNStop = frameN;  // exact frame index
      // update status
      clr4examp.status = PsychoJS.Status.FINISHED;
      clr4examp.setAutoDraw(false);
    }
    
    
    // *clr1trial* updates
    if (t >= 2.5 && clr1trial.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      clr1trial.tStart = t;  // (not accounting for frame time here)
      clr1trial.frameNStart = frameN;  // exact frame index
      
      clr1trial.setAutoDraw(true);
    }
    
    
    // if clr1trial is active this frame...
    if (clr1trial.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 2.5 + 2.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (clr1trial.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      clr1trial.tStop = t;  // not accounting for scr refresh
      clr1trial.frameNStop = frameN;  // exact frame index
      // update status
      clr1trial.status = PsychoJS.Status.FINISHED;
      clr1trial.setAutoDraw(false);
    }
    
    
    // *clr2trail* updates
    if (t >= 2.5 && clr2trail.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      clr2trail.tStart = t;  // (not accounting for frame time here)
      clr2trail.frameNStart = frameN;  // exact frame index
      
      clr2trail.setAutoDraw(true);
    }
    
    
    // if clr2trail is active this frame...
    if (clr2trail.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 2.5 + 2.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (clr2trail.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      clr2trail.tStop = t;  // not accounting for scr refresh
      clr2trail.frameNStop = frameN;  // exact frame index
      // update status
      clr2trail.status = PsychoJS.Status.FINISHED;
      clr2trail.setAutoDraw(false);
    }
    
    
    // *clr3trail* updates
    if (t >= 2.5 && clr3trail.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      clr3trail.tStart = t;  // (not accounting for frame time here)
      clr3trail.frameNStart = frameN;  // exact frame index
      
      clr3trail.setAutoDraw(true);
    }
    
    
    // if clr3trail is active this frame...
    if (clr3trail.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 2.5 + 2.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (clr3trail.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      clr3trail.tStop = t;  // not accounting for scr refresh
      clr3trail.frameNStop = frameN;  // exact frame index
      // update status
      clr3trail.status = PsychoJS.Status.FINISHED;
      clr3trail.setAutoDraw(false);
    }
    
    
    // *clr4trail* updates
    if (t >= 2.5 && clr4trail.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      clr4trail.tStart = t;  // (not accounting for frame time here)
      clr4trail.frameNStart = frameN;  // exact frame index
      
      clr4trail.setAutoDraw(true);
    }
    
    
    // if clr4trail is active this frame...
    if (clr4trail.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 2.5 + 2.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (clr4trail.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      clr4trail.tStop = t;  // not accounting for scr refresh
      clr4trail.frameNStop = frameN;  // exact frame index
      // update status
      clr4trail.status = PsychoJS.Status.FINISHED;
      clr4trail.setAutoDraw(false);
    }
    
    
    // *key_skip* updates
    if (t >= 0.0 && key_skip.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_skip.tStart = t;  // (not accounting for frame time here)
      key_skip.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_skip.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_skip.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_skip.clearEvents(); });
    }
    frameRemains = 0.0 + 6 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (key_skip.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      key_skip.tStop = t;  // not accounting for scr refresh
      key_skip.frameNStop = frameN;  // exact frame index
      // update status
      key_skip.status = PsychoJS.Status.FINISHED;
      frameRemains = 0.0 + 6 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (key_skip.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        key_skip.tStop = t;  // not accounting for scr refresh
        key_skip.frameNStop = frameN;  // exact frame index
        // update status
        key_skip.status = PsychoJS.Status.FINISHED;
        key_skip.status = PsychoJS.Status.FINISHED;
          }
        
      }
      
      // if key_skip is active this frame...
      if (key_skip.status === PsychoJS.Status.STARTED) {
        let theseKeys = key_skip.getKeys({
          keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
          waitRelease: false
        });
        _key_skip_allKeys = _key_skip_allKeys.concat(theseKeys);
        if (_key_skip_allKeys.length > 0) {
          key_skip.keys = _key_skip_allKeys[_key_skip_allKeys.length - 1].name;  // just the last key pressed
          key_skip.rt = _key_skip_allKeys[_key_skip_allKeys.length - 1].rt;
          key_skip.duration = _key_skip_allKeys[_key_skip_allKeys.length - 1].duration;
          // a response ends the routine
          continueRoutine = false;
        }
      }
      
      
      // *MASKclr1tr* updates
      if (t >= 5 && MASKclr1tr.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        MASKclr1tr.tStart = t;  // (not accounting for frame time here)
        MASKclr1tr.frameNStart = frameN;  // exact frame index
        
        MASKclr1tr.setAutoDraw(true);
      }
      
      
      // if MASKclr1tr is active this frame...
      if (MASKclr1tr.status === PsychoJS.Status.STARTED) {
      }
      
      frameRemains = 5 + 1 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (MASKclr1tr.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        MASKclr1tr.tStop = t;  // not accounting for scr refresh
        MASKclr1tr.frameNStop = frameN;  // exact frame index
        // update status
        MASKclr1tr.status = PsychoJS.Status.FINISHED;
        MASKclr1tr.setAutoDraw(false);
      }
      
      
      // *MASKclr2tr* updates
      if (t >= 5 && MASKclr2tr.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        MASKclr2tr.tStart = t;  // (not accounting for frame time here)
        MASKclr2tr.frameNStart = frameN;  // exact frame index
        
        MASKclr2tr.setAutoDraw(true);
      }
      
      
      // if MASKclr2tr is active this frame...
      if (MASKclr2tr.status === PsychoJS.Status.STARTED) {
      }
      
      frameRemains = 5 + 1 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (MASKclr2tr.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        MASKclr2tr.tStop = t;  // not accounting for scr refresh
        MASKclr2tr.frameNStop = frameN;  // exact frame index
        // update status
        MASKclr2tr.status = PsychoJS.Status.FINISHED;
        MASKclr2tr.setAutoDraw(false);
      }
      
      
      // *MASKclr3tr* updates
      if (t >= 5 && MASKclr3tr.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        MASKclr3tr.tStart = t;  // (not accounting for frame time here)
        MASKclr3tr.frameNStart = frameN;  // exact frame index
        
        MASKclr3tr.setAutoDraw(true);
      }
      
      
      // if MASKclr3tr is active this frame...
      if (MASKclr3tr.status === PsychoJS.Status.STARTED) {
      }
      
      frameRemains = 5 + 1 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (MASKclr3tr.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        MASKclr3tr.tStop = t;  // not accounting for scr refresh
        MASKclr3tr.frameNStop = frameN;  // exact frame index
        // update status
        MASKclr3tr.status = PsychoJS.Status.FINISHED;
        MASKclr3tr.setAutoDraw(false);
      }
      
      
      // *MASKclr4tr* updates
      if (t >= 5 && MASKclr4tr.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        MASKclr4tr.tStart = t;  // (not accounting for frame time here)
        MASKclr4tr.frameNStart = frameN;  // exact frame index
        
        MASKclr4tr.setAutoDraw(true);
      }
      
      
      // if MASKclr4tr is active this frame...
      if (MASKclr4tr.status === PsychoJS.Status.STARTED) {
      }
      
      frameRemains = 5 + 1 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (MASKclr4tr.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        MASKclr4tr.tStop = t;  // not accounting for scr refresh
        MASKclr4tr.frameNStop = frameN;  // exact frame index
        // update status
        MASKclr4tr.status = PsychoJS.Status.FINISHED;
        MASKclr4tr.setAutoDraw(false);
      }
      
      // check for quit (typically the Esc key)
      if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
        return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      for (const thisComponent of CC_trialComponents)
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
          break;
        }
      
      // refresh the screen if continuing
      if (continueRoutine && routineTimer.getTime() > 0) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function CC_trialRoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'CC_trial' ---
      for (const thisComponent of CC_trialComponents) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      }
      psychoJS.experiment.addData('CC_trial.stopped', globalClock.getTime());
      key_skip.stop();
      if (routineForceEnded) {
          routineTimer.reset();} else if (CC_trialMaxDurationReached) {
          CC_trialClock.add(CC_trialMaxDuration);
      } else {
          CC_trialClock.add(6.000000);
      }
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
var blankMaxDurationReached;
var blankMaxDuration;
var blankComponents;
function blankRoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'blank' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      blankClock.reset(routineTimer.getTime());
      routineTimer.add(0.500000);
      blankMaxDurationReached = false;
      // update component parameters for each repeat
      psychoJS.experiment.addData('blank.started', globalClock.getTime());
      blankMaxDuration = null
      // keep track of which components have finished
      blankComponents = [];
      blankComponents.push(fix);
      
      for (const thisComponent of blankComponents)
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
      return Scheduler.Event.NEXT;
    }
  }
  
  
function blankRoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'blank' ---
      // get current time
      t = blankClock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      
      // *fix* updates
      if (t >= 0.0 && fix.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        fix.tStart = t;  // (not accounting for frame time here)
        fix.frameNStart = frameN;  // exact frame index
        
        fix.setAutoDraw(true);
      }
      
      
      // if fix is active this frame...
      if (fix.status === PsychoJS.Status.STARTED) {
      }
      
      frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (fix.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        fix.tStop = t;  // not accounting for scr refresh
        fix.frameNStop = frameN;  // exact frame index
        // update status
        fix.status = PsychoJS.Status.FINISHED;
        fix.setAutoDraw(false);
      }
      
      // check for quit (typically the Esc key)
      if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
        return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
      }
      
      // check if the Routine should terminate
      if (!continueRoutine) {  // a component has requested a forced-end of Routine
        routineForceEnded = true;
        return Scheduler.Event.NEXT;
      }
      
      continueRoutine = false;  // reverts to True if at least one component still running
      for (const thisComponent of blankComponents)
        if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
          continueRoutine = true;
          break;
        }
      
      // refresh the screen if continuing
      if (continueRoutine && routineTimer.getTime() > 0) {
        return Scheduler.Event.FLIP_REPEAT;
      } else {
        return Scheduler.Event.NEXT;
      }
    };
  }
  
  
function blankRoutineEnd(snapshot) {
    return async function () {
      //--- Ending Routine 'blank' ---
      for (const thisComponent of blankComponents) {
        if (typeof thisComponent.setAutoDraw === 'function') {
          thisComponent.setAutoDraw(false);
        }
      }
      psychoJS.experiment.addData('blank.stopped', globalClock.getTime());
      if (routineForceEnded) {
          routineTimer.reset();} else if (blankMaxDurationReached) {
          blankClock.add(blankMaxDuration);
      } else {
          blankClock.add(0.500000);
      }
      // Routines running outside a loop should always advance the datafile row
      if (currentLoop === psychoJS.experiment) {
        psychoJS.experiment.nextEntry(snapshot);
      }
      return Scheduler.Event.NEXT;
    }
  }
  
  
var CC_trainAnswMaxDurationReached;
var _CC_resp_2_allKeys;
var CC_trainAnswMaxDuration;
var CC_trainAnswComponents;
function CC_trainAnswRoutineBegin(snapshot) {
    return async function () {
      TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
      
      //--- Prepare to start Routine 'CC_trainAnsw' ---
      t = 0;
      frameN = -1;
      continueRoutine = true; // until we're told otherwise
      // keep track of whether this Routine was forcibly ended
      routineForceEnded = false;
      CC_trainAnswClock.reset(routineTimer.getTime());
      routineTimer.add(5.000000);
      CC_trainAnswMaxDurationReached = false;
      // update component parameters for each repeat
      l_point_2.setFillColor(new util.Color(l_test));
      r_point_2.setFillColor(new util.Color(r_test));
      CC_resp_2.keys = undefined;
      CC_resp_2.rt = undefined;
      _CC_resp_2_allKeys = [];
      psychoJS.experiment.addData('CC_trainAnsw.started', globalClock.getTime());
      CC_trainAnswMaxDuration = null
      // keep track of which components have finished
      CC_trainAnswComponents = [];
      CC_trainAnswComponents.push(l_point_2);
      CC_trainAnswComponents.push(r_point_2);
      CC_trainAnswComponents.push(CC_resp_2);
      CC_trainAnswComponents.push(l_hint);
      CC_trainAnswComponents.push(r_hint);
      
      for (const thisComponent of CC_trainAnswComponents)
        if ('status' in thisComponent)
          thisComponent.status = PsychoJS.Status.NOT_STARTED;
      return Scheduler.Event.NEXT;
    }
  }
  
  
function CC_trainAnswRoutineEachFrame() {
    return async function () {
      //--- Loop for each frame of Routine 'CC_trainAnsw' ---
      // get current time
      t = CC_trainAnswClock.getTime();
      frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
      // update/draw components on each frame
      
      // *l_point_2* updates
      if (t >= 0.0 && l_point_2.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        l_point_2.tStart = t;  // (not accounting for frame time here)
        l_point_2.frameNStart = frameN;  // exact frame index
        
        l_point_2.setAutoDraw(true);
      }
      
      
      // if l_point_2 is active this frame...
      if (l_point_2.status === PsychoJS.Status.STARTED) {
      }
      
      frameRemains = 0.0 + 5.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (l_point_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        l_point_2.tStop = t;  // not accounting for scr refresh
        l_point_2.frameNStop = frameN;  // exact frame index
        // update status
        l_point_2.status = PsychoJS.Status.FINISHED;
        l_point_2.setAutoDraw(false);
      }
      
      
      // *r_point_2* updates
      if (t >= 0.0 && r_point_2.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        r_point_2.tStart = t;  // (not accounting for frame time here)
        r_point_2.frameNStart = frameN;  // exact frame index
        
        r_point_2.setAutoDraw(true);
      }
      
      
      // if r_point_2 is active this frame...
      if (r_point_2.status === PsychoJS.Status.STARTED) {
      }
      
      frameRemains = 0.0 + 5.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (r_point_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        r_point_2.tStop = t;  // not accounting for scr refresh
        r_point_2.frameNStop = frameN;  // exact frame index
        // update status
        r_point_2.status = PsychoJS.Status.FINISHED;
        r_point_2.setAutoDraw(false);
      }
      
      
      // *CC_resp_2* updates
      if (t >= 0.0 && CC_resp_2.status === PsychoJS.Status.NOT_STARTED) {
        // keep track of start time/frame for later
        CC_resp_2.tStart = t;  // (not accounting for frame time here)
        CC_resp_2.frameNStart = frameN;  // exact frame index
        
        // keyboard checking is just starting
        psychoJS.window.callOnFlip(function() { CC_resp_2.clock.reset(); });  // t=0 on next screen flip
        psychoJS.window.callOnFlip(function() { CC_resp_2.start(); }); // start on screen flip
        psychoJS.window.callOnFlip(function() { CC_resp_2.clearEvents(); });
      }
      frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
      if (CC_resp_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
        // keep track of stop time/frame for later
        CC_resp_2.tStop = t;  // not accounting for scr refresh
        CC_resp_2.frameNStop = frameN;  // exact frame index
        // update status
        CC_resp_2.status = PsychoJS.Status.FINISHED;
        frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
        if (CC_resp_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
          // keep track of stop time/frame for later
          CC_resp_2.tStop = t;  // not accounting for scr refresh
          CC_resp_2.frameNStop = frameN;  // exact frame index
          // update status
          CC_resp_2.status = PsychoJS.Status.FINISHED;
          CC_resp_2.status = PsychoJS.Status.FINISHED;
            }
          
        }
        
        // if CC_resp_2 is active this frame...
        if (CC_resp_2.status === PsychoJS.Status.STARTED) {
          let theseKeys = CC_resp_2.getKeys({
            keyList: typeof ['left','right','space'] === 'string' ? [['left','right','space']] : ['left','right','space'], 
            waitRelease: false
          });
          _CC_resp_2_allKeys = _CC_resp_2_allKeys.concat(theseKeys);
          if (_CC_resp_2_allKeys.length > 0) {
            CC_resp_2.keys = _CC_resp_2_allKeys[_CC_resp_2_allKeys.length - 1].name;  // just the last key pressed
            CC_resp_2.rt = _CC_resp_2_allKeys[_CC_resp_2_allKeys.length - 1].rt;
            CC_resp_2.duration = _CC_resp_2_allKeys[_CC_resp_2_allKeys.length - 1].duration;
            // was this correct?
            if (CC_resp_2.keys == answ) {
                CC_resp_2.corr = 1;
            } else {
                CC_resp_2.corr = 0;
            }
            // a response ends the routine
            continueRoutine = false;
          }
        }
        
        
        // *l_hint* updates
        if (t >= 0.0 && l_hint.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          l_hint.tStart = t;  // (not accounting for frame time here)
          l_hint.frameNStart = frameN;  // exact frame index
          
          l_hint.setAutoDraw(true);
        }
        
        
        // if l_hint is active this frame...
        if (l_hint.status === PsychoJS.Status.STARTED) {
        }
        
        frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
        if (l_hint.status === PsychoJS.Status.STARTED && t >= frameRemains) {
          // keep track of stop time/frame for later
          l_hint.tStop = t;  // not accounting for scr refresh
          l_hint.frameNStop = frameN;  // exact frame index
          // update status
          l_hint.status = PsychoJS.Status.FINISHED;
          l_hint.setAutoDraw(false);
        }
        
        
        // *r_hint* updates
        if (t >= 0.0 && r_hint.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          r_hint.tStart = t;  // (not accounting for frame time here)
          r_hint.frameNStart = frameN;  // exact frame index
          
          r_hint.setAutoDraw(true);
        }
        
        
        // if r_hint is active this frame...
        if (r_hint.status === PsychoJS.Status.STARTED) {
        }
        
        frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
        if (r_hint.status === PsychoJS.Status.STARTED && t >= frameRemains) {
          // keep track of stop time/frame for later
          r_hint.tStop = t;  // not accounting for scr refresh
          r_hint.frameNStop = frameN;  // exact frame index
          // update status
          r_hint.status = PsychoJS.Status.FINISHED;
          r_hint.setAutoDraw(false);
        }
        
        // check for quit (typically the Esc key)
        if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
          return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
        }
        
        // check if the Routine should terminate
        if (!continueRoutine) {  // a component has requested a forced-end of Routine
          routineForceEnded = true;
          return Scheduler.Event.NEXT;
        }
        
        continueRoutine = false;  // reverts to True if at least one component still running
        for (const thisComponent of CC_trainAnswComponents)
          if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
            continueRoutine = true;
            break;
          }
        
        // refresh the screen if continuing
        if (continueRoutine && routineTimer.getTime() > 0) {
          return Scheduler.Event.FLIP_REPEAT;
        } else {
          return Scheduler.Event.NEXT;
        }
      };
    }
    
    
function CC_trainAnswRoutineEnd(snapshot) {
      return async function () {
        //--- Ending Routine 'CC_trainAnsw' ---
        for (const thisComponent of CC_trainAnswComponents) {
          if (typeof thisComponent.setAutoDraw === 'function') {
            thisComponent.setAutoDraw(false);
          }
        }
        psychoJS.experiment.addData('CC_trainAnsw.stopped', globalClock.getTime());
        // was no response the correct answer?!
        if (CC_resp_2.keys === undefined) {
          if (['None','none',undefined].includes(answ)) {
             CC_resp_2.corr = 1;  // correct non-response
          } else {
             CC_resp_2.corr = 0;  // failed to respond (incorrectly)
          }
        }
        // store data for current loop
        // update the trial handler
        if (currentLoop instanceof MultiStairHandler) {
          currentLoop.addResponse(CC_resp_2.corr, level);
        }
        psychoJS.experiment.addData('CC_resp_2.keys', CC_resp_2.keys);
        psychoJS.experiment.addData('CC_resp_2.corr', CC_resp_2.corr);
        if (typeof CC_resp_2.keys !== 'undefined') {  // we had a response
            psychoJS.experiment.addData('CC_resp_2.rt', CC_resp_2.rt);
            psychoJS.experiment.addData('CC_resp_2.duration', CC_resp_2.duration);
            routineTimer.reset();
            }
        
        CC_resp_2.stop();
        if (routineForceEnded) {
            routineTimer.reset();} else if (CC_trainAnswMaxDurationReached) {
            CC_trainAnswClock.add(CC_trainAnswMaxDuration);
        } else {
            CC_trainAnswClock.add(5.000000);
        }
        // Routines running outside a loop should always advance the datafile row
        if (currentLoop === psychoJS.experiment) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        return Scheduler.Event.NEXT;
      }
    }
    
    
var FBMaxDurationReached;
var FBMaxDuration;
var FBComponents;
function FBRoutineBegin(snapshot) {
      return async function () {
        TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
        
        //--- Prepare to start Routine 'FB' ---
        t = 0;
        frameN = -1;
        continueRoutine = true; // until we're told otherwise
        // keep track of whether this Routine was forcibly ended
        routineForceEnded = false;
        FBClock.reset(routineTimer.getTime());
        routineTimer.add(1.500000);
        FBMaxDurationReached = false;
        // update component parameters for each repeat
        // Run 'Begin Routine' code from FB_code_2
        if ((! CC_resp_2.keys)) {
            msg = "\u043d\u0435\u0442 \u043e\u0442\u0432\u0435\u0442\u0430";
        } else {
            if (CC_resp_2.corr) {
                msg = "\u0414\u0430! \u041f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439:";
            } else {
                msg = "\u041d\u0435\u0442! \u041f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439:";
            }
        }
        if (((! (difficulty === "none")) && (CC_resp_2.corr === 1))) {
            try_corr = (try_corr + 1);
        }
        
        FB_text_2.setText(msg);
        clractual.setFillColor(new util.Color(realclr));
        psychoJS.experiment.addData('FB.started', globalClock.getTime());
        FBMaxDuration = null
        // keep track of which components have finished
        FBComponents = [];
        FBComponents.push(FB_text_2);
        FBComponents.push(clractual);
        
        for (const thisComponent of FBComponents)
          if ('status' in thisComponent)
            thisComponent.status = PsychoJS.Status.NOT_STARTED;
        return Scheduler.Event.NEXT;
      }
    }
    
    
function FBRoutineEachFrame() {
      return async function () {
        //--- Loop for each frame of Routine 'FB' ---
        // get current time
        t = FBClock.getTime();
        frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
        // update/draw components on each frame
        
        // *FB_text_2* updates
        if (t >= 0.0 && FB_text_2.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          FB_text_2.tStart = t;  // (not accounting for frame time here)
          FB_text_2.frameNStart = frameN;  // exact frame index
          
          FB_text_2.setAutoDraw(true);
        }
        
        
        // if FB_text_2 is active this frame...
        if (FB_text_2.status === PsychoJS.Status.STARTED) {
        }
        
        frameRemains = 0.0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
        if (FB_text_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
          // keep track of stop time/frame for later
          FB_text_2.tStop = t;  // not accounting for scr refresh
          FB_text_2.frameNStop = frameN;  // exact frame index
          // update status
          FB_text_2.status = PsychoJS.Status.FINISHED;
          FB_text_2.setAutoDraw(false);
        }
        
        
        // *clractual* updates
        if (t >= 0 && clractual.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          clractual.tStart = t;  // (not accounting for frame time here)
          clractual.frameNStart = frameN;  // exact frame index
          
          clractual.setAutoDraw(true);
        }
        
        
        // if clractual is active this frame...
        if (clractual.status === PsychoJS.Status.STARTED) {
        }
        
        frameRemains = 0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
        if (clractual.status === PsychoJS.Status.STARTED && t >= frameRemains) {
          // keep track of stop time/frame for later
          clractual.tStop = t;  // not accounting for scr refresh
          clractual.frameNStop = frameN;  // exact frame index
          // update status
          clractual.status = PsychoJS.Status.FINISHED;
          clractual.setAutoDraw(false);
        }
        
        // check for quit (typically the Esc key)
        if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
          return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
        }
        
        // check if the Routine should terminate
        if (!continueRoutine) {  // a component has requested a forced-end of Routine
          routineForceEnded = true;
          return Scheduler.Event.NEXT;
        }
        
        continueRoutine = false;  // reverts to True if at least one component still running
        for (const thisComponent of FBComponents)
          if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
            continueRoutine = true;
            break;
          }
        
        // refresh the screen if continuing
        if (continueRoutine && routineTimer.getTime() > 0) {
          return Scheduler.Event.FLIP_REPEAT;
        } else {
          return Scheduler.Event.NEXT;
        }
      };
    }
    
    
function FBRoutineEnd(snapshot) {
      return async function () {
        //--- Ending Routine 'FB' ---
        for (const thisComponent of FBComponents) {
          if (typeof thisComponent.setAutoDraw === 'function') {
            thisComponent.setAutoDraw(false);
          }
        }
        psychoJS.experiment.addData('FB.stopped', globalClock.getTime());
        if (routineForceEnded) {
            routineTimer.reset();} else if (FBMaxDurationReached) {
            FBClock.add(FBMaxDuration);
        } else {
            FBClock.add(1.500000);
        }
        // Routines running outside a loop should always advance the datafile row
        if (currentLoop === psychoJS.experiment) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        return Scheduler.Event.NEXT;
      }
    }
    
    
var instr2MaxDurationReached;
var _key_resp_allKeys;
var instr2MaxDuration;
var instr2Components;
function instr2RoutineBegin(snapshot) {
      return async function () {
        TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
        
        //--- Prepare to start Routine 'instr2' ---
        t = 0;
        frameN = -1;
        continueRoutine = true; // until we're told otherwise
        // keep track of whether this Routine was forcibly ended
        routineForceEnded = false;
        instr2Clock.reset();
        routineTimer.reset();
        instr2MaxDurationReached = false;
        // update component parameters for each repeat
        // Run 'Begin Routine' code from correct_FB
        final_corr = (try_corr / 8);
        if ((final_corr > 0.5)) {
            train_txt = "\u0422\u0440\u0435\u043d\u0438\u0440\u043e\u0432\u043a\u0430 \u043e\u043a\u043e\u043d\u0447\u0435\u043d\u0430. \u0421 \u044d\u0442\u043e\u0433\u043e \u043c\u043e\u043c\u0435\u043d\u0442\u0430 \u043d\u0430\u0447\u0438\u043d\u0430\u044e\u0442\u0441\u044f \u0437\u0430\u0434\u0430\u0447\u0438 \u043e\u0441\u043d\u043e\u0432\u043d\u043e\u0433\u043e \u044d\u0442\u0430\u043f\u0430. \u0412\u0430\u043c \u043d\u0435 \u0431\u0443\u0434\u0435\u0442 \u0434\u0430\u0432\u0430\u0442\u044c\u0441\u044f \u043e\u0431\u0440\u0430\u0442\u043d\u0430\u044f \u0441\u0432\u044f\u0437\u044c \u043f\u043e \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e\u0441\u0442\u0438 \u043e\u0442\u0432\u0435\u0442\u0430, \u0438 \u043f\u043e\u0434\u043a\u0430\u0437\u043e\u043a \u043e \u043a\u043b\u0430\u0432\u0438\u0448\u0430\u0445 \u043d\u0435 \u0431\u0443\u0434\u0435\u0442. \u0421 \u044d\u0442\u043e\u0433\u043e \u043c\u043e\u043c\u0435\u043d\u0442\u0430 \u0438 \u0434\u043e \u043a\u043e\u043d\u0446\u0430 \u0438\u0441\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u043d\u0438\u044f, \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043d\u0435 \u043e\u0442\u0432\u043b\u0435\u043a\u0430\u0439\u0442\u0435\u0441\u044c \u043e\u0442 \u0437\u0430\u0434\u0430\u0447. \u041a\u043e\u0433\u0434\u0430 \u0431\u0443\u0434\u0435\u0442\u0435 \u0433\u043e\u0442\u043e\u0432\u044b, \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u041f\u0420\u041e\u0411\u0415\u041b.";
        } else {
            train_txt = "\u0422\u0440\u0435\u043d\u0438\u0440\u043e\u0432\u043a\u0430 \u043e\u043a\u043e\u043d\u0447\u0435\u043d\u0430. \u041a \u0441\u043e\u0436\u0430\u043b\u0435\u043d\u0438\u044e, \u0432\u044b \u043e\u0442\u0432\u0435\u0442\u0438\u043b\u0438 \u043c\u0435\u043d\u0435\u0435 \u0447\u0435\u043c \u043d\u0430 50% \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u044c\u043d\u044b\u0445 \u0437\u0430\u0434\u0430\u0447, \u0438 \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u043d\u0435 \u0434\u043e\u043f\u0443\u0441\u043a\u0430\u0435\u0442\u0435\u0441\u044c \u043d\u0430 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u044d\u0442\u0430\u043f. \u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0437\u0430\u043a\u0440\u043e\u0439\u0442\u0435 \u044d\u043a\u0441\u043f\u0435\u0440\u0438\u043c\u0435\u043d\u0442 \u043a\u043d\u043e\u043f\u043a\u043e\u0439 Esc. \u0412\u0430\u0448\u0438 \u0434\u0430\u043d\u043d\u044b\u0435 \u043d\u0435 \u0431\u0443\u0434\u0443\u0442 \u043f\u043e\u0442\u0435\u0440\u044f\u043d\u044b. \u0421\u043f\u0430\u0441\u0438\u0431\u043e \u0437\u0430 \u0432\u0430\u0448\u0435 \u0432\u0440\u0435\u043c\u044f!";
        }
        
        key_resp.keys = undefined;
        key_resp.rt = undefined;
        _key_resp_allKeys = [];
        psychoJS.experiment.addData('instr2.started', globalClock.getTime());
        instr2MaxDuration = null
        // keep track of which components have finished
        instr2Components = [];
        instr2Components.push(text);
        instr2Components.push(key_resp);
        
        for (const thisComponent of instr2Components)
          if ('status' in thisComponent)
            thisComponent.status = PsychoJS.Status.NOT_STARTED;
        return Scheduler.Event.NEXT;
      }
    }
    
    
function instr2RoutineEachFrame() {
      return async function () {
        //--- Loop for each frame of Routine 'instr2' ---
        // get current time
        t = instr2Clock.getTime();
        frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
        // update/draw components on each frame
        
        // *text* updates
        if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
          // update params
          text.setText(train_txt, false);
          // keep track of start time/frame for later
          text.tStart = t;  // (not accounting for frame time here)
          text.frameNStart = frameN;  // exact frame index
          
          text.setAutoDraw(true);
        }
        
        
        // if text is active this frame...
        if (text.status === PsychoJS.Status.STARTED) {
          // update params
          text.setText(train_txt, false);
        }
        
        
        // *key_resp* updates
        if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          key_resp.tStart = t;  // (not accounting for frame time here)
          key_resp.frameNStart = frameN;  // exact frame index
          
          // keyboard checking is just starting
          psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
          psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
          psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
        }
        
        // if key_resp is active this frame...
        if (key_resp.status === PsychoJS.Status.STARTED) {
          let theseKeys = key_resp.getKeys({
            keyList: typeof ['enter','space'] === 'string' ? [['enter','space']] : ['enter','space'], 
            waitRelease: false
          });
          _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
          if (_key_resp_allKeys.length > 0) {
            key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
            key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
            key_resp.duration = _key_resp_allKeys[_key_resp_allKeys.length - 1].duration;
            // a response ends the routine
            continueRoutine = false;
          }
        }
        
        // check for quit (typically the Esc key)
        if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
          return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
        }
        
        // check if the Routine should terminate
        if (!continueRoutine) {  // a component has requested a forced-end of Routine
          routineForceEnded = true;
          return Scheduler.Event.NEXT;
        }
        
        continueRoutine = false;  // reverts to True if at least one component still running
        for (const thisComponent of instr2Components)
          if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
            continueRoutine = true;
            break;
          }
        
        // refresh the screen if continuing
        if (continueRoutine) {
          return Scheduler.Event.FLIP_REPEAT;
        } else {
          return Scheduler.Event.NEXT;
        }
      };
    }
    
    
function instr2RoutineEnd(snapshot) {
      return async function () {
        //--- Ending Routine 'instr2' ---
        for (const thisComponent of instr2Components) {
          if (typeof thisComponent.setAutoDraw === 'function') {
            thisComponent.setAutoDraw(false);
          }
        }
        psychoJS.experiment.addData('instr2.stopped', globalClock.getTime());
        key_resp.stop();
        // the Routine "instr2" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset();
        
        // Routines running outside a loop should always advance the datafile row
        if (currentLoop === psychoJS.experiment) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        return Scheduler.Event.NEXT;
      }
    }
    
    
var CC_answerMaxDurationReached;
var _CC_resp_allKeys;
var CC_answerMaxDuration;
var CC_answerComponents;
function CC_answerRoutineBegin(snapshot) {
      return async function () {
        TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
        
        //--- Prepare to start Routine 'CC_answer' ---
        t = 0;
        frameN = -1;
        continueRoutine = true; // until we're told otherwise
        // keep track of whether this Routine was forcibly ended
        routineForceEnded = false;
        CC_answerClock.reset(routineTimer.getTime());
        routineTimer.add(5.000000);
        CC_answerMaxDurationReached = false;
        // update component parameters for each repeat
        l_point.setFillColor(new util.Color(l_test));
        r_point.setFillColor(new util.Color(r_test));
        CC_resp.keys = undefined;
        CC_resp.rt = undefined;
        _CC_resp_allKeys = [];
        psychoJS.experiment.addData('CC_answer.started', globalClock.getTime());
        CC_answerMaxDuration = null
        // keep track of which components have finished
        CC_answerComponents = [];
        CC_answerComponents.push(l_point);
        CC_answerComponents.push(r_point);
        CC_answerComponents.push(CC_resp);
        
        for (const thisComponent of CC_answerComponents)
          if ('status' in thisComponent)
            thisComponent.status = PsychoJS.Status.NOT_STARTED;
        return Scheduler.Event.NEXT;
      }
    }
    
    
function CC_answerRoutineEachFrame() {
      return async function () {
        //--- Loop for each frame of Routine 'CC_answer' ---
        // get current time
        t = CC_answerClock.getTime();
        frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
        // update/draw components on each frame
        
        // *l_point* updates
        if (t >= 0.0 && l_point.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          l_point.tStart = t;  // (not accounting for frame time here)
          l_point.frameNStart = frameN;  // exact frame index
          
          l_point.setAutoDraw(true);
        }
        
        
        // if l_point is active this frame...
        if (l_point.status === PsychoJS.Status.STARTED) {
        }
        
        frameRemains = 0.0 + 5.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
        if (l_point.status === PsychoJS.Status.STARTED && t >= frameRemains) {
          // keep track of stop time/frame for later
          l_point.tStop = t;  // not accounting for scr refresh
          l_point.frameNStop = frameN;  // exact frame index
          // update status
          l_point.status = PsychoJS.Status.FINISHED;
          l_point.setAutoDraw(false);
        }
        
        
        // *r_point* updates
        if (t >= 0.0 && r_point.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          r_point.tStart = t;  // (not accounting for frame time here)
          r_point.frameNStart = frameN;  // exact frame index
          
          r_point.setAutoDraw(true);
        }
        
        
        // if r_point is active this frame...
        if (r_point.status === PsychoJS.Status.STARTED) {
        }
        
        frameRemains = 0.0 + 5.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
        if (r_point.status === PsychoJS.Status.STARTED && t >= frameRemains) {
          // keep track of stop time/frame for later
          r_point.tStop = t;  // not accounting for scr refresh
          r_point.frameNStop = frameN;  // exact frame index
          // update status
          r_point.status = PsychoJS.Status.FINISHED;
          r_point.setAutoDraw(false);
        }
        
        
        // *CC_resp* updates
        if (t >= 0.0 && CC_resp.status === PsychoJS.Status.NOT_STARTED) {
          // keep track of start time/frame for later
          CC_resp.tStart = t;  // (not accounting for frame time here)
          CC_resp.frameNStart = frameN;  // exact frame index
          
          // keyboard checking is just starting
          psychoJS.window.callOnFlip(function() { CC_resp.clock.reset(); });  // t=0 on next screen flip
          psychoJS.window.callOnFlip(function() { CC_resp.start(); }); // start on screen flip
          psychoJS.window.callOnFlip(function() { CC_resp.clearEvents(); });
        }
        frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
        if (CC_resp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
          // keep track of stop time/frame for later
          CC_resp.tStop = t;  // not accounting for scr refresh
          CC_resp.frameNStop = frameN;  // exact frame index
          // update status
          CC_resp.status = PsychoJS.Status.FINISHED;
          frameRemains = 0.0 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
          if (CC_resp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
            // keep track of stop time/frame for later
            CC_resp.tStop = t;  // not accounting for scr refresh
            CC_resp.frameNStop = frameN;  // exact frame index
            // update status
            CC_resp.status = PsychoJS.Status.FINISHED;
            CC_resp.status = PsychoJS.Status.FINISHED;
              }
            
          }
          
          // if CC_resp is active this frame...
          if (CC_resp.status === PsychoJS.Status.STARTED) {
            let theseKeys = CC_resp.getKeys({
              keyList: typeof ['left','right','space'] === 'string' ? [['left','right','space']] : ['left','right','space'], 
              waitRelease: false
            });
            _CC_resp_allKeys = _CC_resp_allKeys.concat(theseKeys);
            if (_CC_resp_allKeys.length > 0) {
              CC_resp.keys = _CC_resp_allKeys[_CC_resp_allKeys.length - 1].name;  // just the last key pressed
              CC_resp.rt = _CC_resp_allKeys[_CC_resp_allKeys.length - 1].rt;
              CC_resp.duration = _CC_resp_allKeys[_CC_resp_allKeys.length - 1].duration;
              // was this correct?
              if (CC_resp.keys == answ) {
                  CC_resp.corr = 1;
              } else {
                  CC_resp.corr = 0;
              }
              // a response ends the routine
              continueRoutine = false;
            }
          }
          
          // check for quit (typically the Esc key)
          if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
            return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
          }
          
          // check if the Routine should terminate
          if (!continueRoutine) {  // a component has requested a forced-end of Routine
            routineForceEnded = true;
            return Scheduler.Event.NEXT;
          }
          
          continueRoutine = false;  // reverts to True if at least one component still running
          for (const thisComponent of CC_answerComponents)
            if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
              continueRoutine = true;
              break;
            }
          
          // refresh the screen if continuing
          if (continueRoutine && routineTimer.getTime() > 0) {
            return Scheduler.Event.FLIP_REPEAT;
          } else {
            return Scheduler.Event.NEXT;
          }
        };
      }
      
      
function CC_answerRoutineEnd(snapshot) {
        return async function () {
          //--- Ending Routine 'CC_answer' ---
          for (const thisComponent of CC_answerComponents) {
            if (typeof thisComponent.setAutoDraw === 'function') {
              thisComponent.setAutoDraw(false);
            }
          }
          psychoJS.experiment.addData('CC_answer.stopped', globalClock.getTime());
          // was no response the correct answer?!
          if (CC_resp.keys === undefined) {
            if (['None','none',undefined].includes(answ)) {
               CC_resp.corr = 1;  // correct non-response
            } else {
               CC_resp.corr = 0;  // failed to respond (incorrectly)
            }
          }
          // store data for current loop
          // update the trial handler
          if (currentLoop instanceof MultiStairHandler) {
            currentLoop.addResponse(CC_resp.corr, level);
          }
          psychoJS.experiment.addData('CC_resp.keys', CC_resp.keys);
          psychoJS.experiment.addData('CC_resp.corr', CC_resp.corr);
          if (typeof CC_resp.keys !== 'undefined') {  // we had a response
              psychoJS.experiment.addData('CC_resp.rt', CC_resp.rt);
              psychoJS.experiment.addData('CC_resp.duration', CC_resp.duration);
              routineTimer.reset();
              }
          
          CC_resp.stop();
          if (routineForceEnded) {
              routineTimer.reset();} else if (CC_answerMaxDurationReached) {
              CC_answerClock.add(CC_answerMaxDuration);
          } else {
              CC_answerClock.add(5.000000);
          }
          // Routines running outside a loop should always advance the datafile row
          if (currentLoop === psychoJS.experiment) {
            psychoJS.experiment.nextEntry(snapshot);
          }
          return Scheduler.Event.NEXT;
        }
      }
      
      
var instrtuction_2MaxDurationReached;
var _key_resp_2_allKeys;
var instrtuction_2MaxDuration;
var instrtuction_2Components;
function instrtuction_2RoutineBegin(snapshot) {
        return async function () {
          TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
          
          //--- Prepare to start Routine 'instrtuction_2' ---
          t = 0;
          frameN = -1;
          continueRoutine = true; // until we're told otherwise
          // keep track of whether this Routine was forcibly ended
          routineForceEnded = false;
          instrtuction_2Clock.reset();
          routineTimer.reset();
          instrtuction_2MaxDurationReached = false;
          // update component parameters for each repeat
          key_resp_2.keys = undefined;
          key_resp_2.rt = undefined;
          _key_resp_2_allKeys = [];
          psychoJS.experiment.addData('instrtuction_2.started', globalClock.getTime());
          instrtuction_2MaxDuration = null
          // keep track of which components have finished
          instrtuction_2Components = [];
          instrtuction_2Components.push(text_2);
          instrtuction_2Components.push(key_resp_2);
          
          for (const thisComponent of instrtuction_2Components)
            if ('status' in thisComponent)
              thisComponent.status = PsychoJS.Status.NOT_STARTED;
          return Scheduler.Event.NEXT;
        }
      }
      
      
function instrtuction_2RoutineEachFrame() {
        return async function () {
          //--- Loop for each frame of Routine 'instrtuction_2' ---
          // get current time
          t = instrtuction_2Clock.getTime();
          frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
          // update/draw components on each frame
          
          // *text_2* updates
          if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
            // keep track of start time/frame for later
            text_2.tStart = t;  // (not accounting for frame time here)
            text_2.frameNStart = frameN;  // exact frame index
            
            text_2.setAutoDraw(true);
          }
          
          
          // if text_2 is active this frame...
          if (text_2.status === PsychoJS.Status.STARTED) {
          }
          
          
          // *key_resp_2* updates
          if (t >= 0.0 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
            // keep track of start time/frame for later
            key_resp_2.tStart = t;  // (not accounting for frame time here)
            key_resp_2.frameNStart = frameN;  // exact frame index
            
            // keyboard checking is just starting
            psychoJS.window.callOnFlip(function() { key_resp_2.clock.reset(); });  // t=0 on next screen flip
            psychoJS.window.callOnFlip(function() { key_resp_2.start(); }); // start on screen flip
            psychoJS.window.callOnFlip(function() { key_resp_2.clearEvents(); });
          }
          
          // if key_resp_2 is active this frame...
          if (key_resp_2.status === PsychoJS.Status.STARTED) {
            let theseKeys = key_resp_2.getKeys({
              keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
              waitRelease: false
            });
            _key_resp_2_allKeys = _key_resp_2_allKeys.concat(theseKeys);
            if (_key_resp_2_allKeys.length > 0) {
              key_resp_2.keys = _key_resp_2_allKeys[0].name;  // just the first key pressed
              key_resp_2.rt = _key_resp_2_allKeys[0].rt;
              key_resp_2.duration = _key_resp_2_allKeys[0].duration;
              // a response ends the routine
              continueRoutine = false;
            }
          }
          
          // check for quit (typically the Esc key)
          if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
            return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
          }
          
          // check if the Routine should terminate
          if (!continueRoutine) {  // a component has requested a forced-end of Routine
            routineForceEnded = true;
            return Scheduler.Event.NEXT;
          }
          
          continueRoutine = false;  // reverts to True if at least one component still running
          for (const thisComponent of instrtuction_2Components)
            if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
              continueRoutine = true;
              break;
            }
          
          // refresh the screen if continuing
          if (continueRoutine) {
            return Scheduler.Event.FLIP_REPEAT;
          } else {
            return Scheduler.Event.NEXT;
          }
        };
      }
      
      
function instrtuction_2RoutineEnd(snapshot) {
        return async function () {
          //--- Ending Routine 'instrtuction_2' ---
          for (const thisComponent of instrtuction_2Components) {
            if (typeof thisComponent.setAutoDraw === 'function') {
              thisComponent.setAutoDraw(false);
            }
          }
          psychoJS.experiment.addData('instrtuction_2.stopped', globalClock.getTime());
          // update the trial handler
          if (currentLoop instanceof MultiStairHandler) {
            currentLoop.addResponse(key_resp_2.corr, level);
          }
          psychoJS.experiment.addData('key_resp_2.keys', key_resp_2.keys);
          if (typeof key_resp_2.keys !== 'undefined') {  // we had a response
              psychoJS.experiment.addData('key_resp_2.rt', key_resp_2.rt);
              psychoJS.experiment.addData('key_resp_2.duration', key_resp_2.duration);
              routineTimer.reset();
              }
          
          key_resp_2.stop();
          // the Routine "instrtuction_2" was not non-slip safe, so reset the non-slip timer
          routineTimer.reset();
          
          // Routines running outside a loop should always advance the datafile row
          if (currentLoop === psychoJS.experiment) {
            psychoJS.experiment.nextEntry(snapshot);
          }
          return Scheduler.Event.NEXT;
        }
      }
      
      
var expritaMaxDurationReached;
var _math_resp_allKeys;
var expritaMaxDuration;
var expritaComponents;
function expritaRoutineBegin(snapshot) {
        return async function () {
          TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
          
          //--- Prepare to start Routine 'exprita' ---
          t = 0;
          frameN = -1;
          continueRoutine = true; // until we're told otherwise
          // keep track of whether this Routine was forcibly ended
          routineForceEnded = false;
          expritaClock.reset(routineTimer.getTime());
          routineTimer.add(30.000000);
          expritaMaxDurationReached = false;
          // update component parameters for each repeat
          math_pro.setText(math_problem);
          math_resp.keys = undefined;
          math_resp.rt = undefined;
          _math_resp_allKeys = [];
          psychoJS.experiment.addData('exprita.started', globalClock.getTime());
          expritaMaxDuration = null
          // keep track of which components have finished
          expritaComponents = [];
          expritaComponents.push(math_pro);
          expritaComponents.push(math_resp);
          
          for (const thisComponent of expritaComponents)
            if ('status' in thisComponent)
              thisComponent.status = PsychoJS.Status.NOT_STARTED;
          return Scheduler.Event.NEXT;
        }
      }
      
      
function expritaRoutineEachFrame() {
        return async function () {
          //--- Loop for each frame of Routine 'exprita' ---
          // get current time
          t = expritaClock.getTime();
          frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
          // update/draw components on each frame
          
          // *math_pro* updates
          if (t >= 0.0 && math_pro.status === PsychoJS.Status.NOT_STARTED) {
            // keep track of start time/frame for later
            math_pro.tStart = t;  // (not accounting for frame time here)
            math_pro.frameNStart = frameN;  // exact frame index
            
            math_pro.setAutoDraw(true);
          }
          
          
          // if math_pro is active this frame...
          if (math_pro.status === PsychoJS.Status.STARTED) {
          }
          
          frameRemains = 0.0 + 30 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
          if (math_pro.status === PsychoJS.Status.STARTED && t >= frameRemains) {
            // keep track of stop time/frame for later
            math_pro.tStop = t;  // not accounting for scr refresh
            math_pro.frameNStop = frameN;  // exact frame index
            // update status
            math_pro.status = PsychoJS.Status.FINISHED;
            math_pro.setAutoDraw(false);
          }
          
          
          // *math_resp* updates
          if (t >= 0.0 && math_resp.status === PsychoJS.Status.NOT_STARTED) {
            // keep track of start time/frame for later
            math_resp.tStart = t;  // (not accounting for frame time here)
            math_resp.frameNStart = frameN;  // exact frame index
            
            // keyboard checking is just starting
            psychoJS.window.callOnFlip(function() { math_resp.clock.reset(); });  // t=0 on next screen flip
            psychoJS.window.callOnFlip(function() { math_resp.start(); }); // start on screen flip
            psychoJS.window.callOnFlip(function() { math_resp.clearEvents(); });
          }
          frameRemains = 0.0 + 30 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
          if (math_resp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
            // keep track of stop time/frame for later
            math_resp.tStop = t;  // not accounting for scr refresh
            math_resp.frameNStop = frameN;  // exact frame index
            // update status
            math_resp.status = PsychoJS.Status.FINISHED;
            frameRemains = 0.0 + 30 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
            if (math_resp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
              // keep track of stop time/frame for later
              math_resp.tStop = t;  // not accounting for scr refresh
              math_resp.frameNStop = frameN;  // exact frame index
              // update status
              math_resp.status = PsychoJS.Status.FINISHED;
              math_resp.status = PsychoJS.Status.FINISHED;
                }
              
            }
            
            // if math_resp is active this frame...
            if (math_resp.status === PsychoJS.Status.STARTED) {
              let theseKeys = math_resp.getKeys({
                keyList: typeof ['1','2'] === 'string' ? [['1','2']] : ['1','2'], 
                waitRelease: false
              });
              _math_resp_allKeys = _math_resp_allKeys.concat(theseKeys);
              if (_math_resp_allKeys.length > 0) {
                math_resp.keys = _math_resp_allKeys[_math_resp_allKeys.length - 1].name;  // just the last key pressed
                math_resp.rt = _math_resp_allKeys[_math_resp_allKeys.length - 1].rt;
                math_resp.duration = _math_resp_allKeys[_math_resp_allKeys.length - 1].duration;
                // a response ends the routine
                continueRoutine = false;
              }
            }
            
            // check for quit (typically the Esc key)
            if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
              return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
            }
            
            // check if the Routine should terminate
            if (!continueRoutine) {  // a component has requested a forced-end of Routine
              routineForceEnded = true;
              return Scheduler.Event.NEXT;
            }
            
            continueRoutine = false;  // reverts to True if at least one component still running
            for (const thisComponent of expritaComponents)
              if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
                continueRoutine = true;
                break;
              }
            
            // refresh the screen if continuing
            if (continueRoutine && routineTimer.getTime() > 0) {
              return Scheduler.Event.FLIP_REPEAT;
            } else {
              return Scheduler.Event.NEXT;
            }
          };
        }
        
        
function expritaRoutineEnd(snapshot) {
          return async function () {
            //--- Ending Routine 'exprita' ---
            for (const thisComponent of expritaComponents) {
              if (typeof thisComponent.setAutoDraw === 'function') {
                thisComponent.setAutoDraw(false);
              }
            }
            psychoJS.experiment.addData('exprita.stopped', globalClock.getTime());
            // update the trial handler
            if (currentLoop instanceof MultiStairHandler) {
              currentLoop.addResponse(math_resp.corr, level);
            }
            psychoJS.experiment.addData('math_resp.keys', math_resp.keys);
            if (typeof math_resp.keys !== 'undefined') {  // we had a response
                psychoJS.experiment.addData('math_resp.rt', math_resp.rt);
                psychoJS.experiment.addData('math_resp.duration', math_resp.duration);
                routineTimer.reset();
                }
            
            math_resp.stop();
            if (routineForceEnded) {
                routineTimer.reset();} else if (expritaMaxDurationReached) {
                expritaClock.add(expritaMaxDuration);
            } else {
                expritaClock.add(30.000000);
            }
            // Routines running outside a loop should always advance the datafile row
            if (currentLoop === psychoJS.experiment) {
              psychoJS.experiment.nextEntry(snapshot);
            }
            return Scheduler.Event.NEXT;
          }
        }
        
        
var let_2MaxDurationReached;
var let_2MaxDuration;
var let_2Components;
function let_2RoutineBegin(snapshot) {
          return async function () {
            TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
            
            //--- Prepare to start Routine 'let_2' ---
            t = 0;
            frameN = -1;
            continueRoutine = true; // until we're told otherwise
            // keep track of whether this Routine was forcibly ended
            routineForceEnded = false;
            let_2Clock.reset(routineTimer.getTime());
            routineTimer.add(3.000000);
            let_2MaxDurationReached = false;
            // update component parameters for each repeat
            text_3.setText(letter);
            psychoJS.experiment.addData('let_2.started', globalClock.getTime());
            let_2MaxDuration = null
            // keep track of which components have finished
            let_2Components = [];
            let_2Components.push(text_3);
            
            for (const thisComponent of let_2Components)
              if ('status' in thisComponent)
                thisComponent.status = PsychoJS.Status.NOT_STARTED;
            return Scheduler.Event.NEXT;
          }
        }
        
        
function let_2RoutineEachFrame() {
          return async function () {
            //--- Loop for each frame of Routine 'let_2' ---
            // get current time
            t = let_2Clock.getTime();
            frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
            // update/draw components on each frame
            
            // *text_3* updates
            if (t >= 0.0 && text_3.status === PsychoJS.Status.NOT_STARTED) {
              // keep track of start time/frame for later
              text_3.tStart = t;  // (not accounting for frame time here)
              text_3.frameNStart = frameN;  // exact frame index
              
              text_3.setAutoDraw(true);
            }
            
            
            // if text_3 is active this frame...
            if (text_3.status === PsychoJS.Status.STARTED) {
            }
            
            frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
            if (text_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
              // keep track of stop time/frame for later
              text_3.tStop = t;  // not accounting for scr refresh
              text_3.frameNStop = frameN;  // exact frame index
              // update status
              text_3.status = PsychoJS.Status.FINISHED;
              text_3.setAutoDraw(false);
            }
            
            // check for quit (typically the Esc key)
            if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
              return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
            }
            
            // check if the Routine should terminate
            if (!continueRoutine) {  // a component has requested a forced-end of Routine
              routineForceEnded = true;
              return Scheduler.Event.NEXT;
            }
            
            continueRoutine = false;  // reverts to True if at least one component still running
            for (const thisComponent of let_2Components)
              if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
                continueRoutine = true;
                break;
              }
            
            // refresh the screen if continuing
            if (continueRoutine && routineTimer.getTime() > 0) {
              return Scheduler.Event.FLIP_REPEAT;
            } else {
              return Scheduler.Event.NEXT;
            }
          };
        }
        
        
function let_2RoutineEnd(snapshot) {
          return async function () {
            //--- Ending Routine 'let_2' ---
            for (const thisComponent of let_2Components) {
              if (typeof thisComponent.setAutoDraw === 'function') {
                thisComponent.setAutoDraw(false);
              }
            }
            psychoJS.experiment.addData('let_2.stopped', globalClock.getTime());
            if (routineForceEnded) {
                routineTimer.reset();} else if (let_2MaxDurationReached) {
                let_2Clock.add(let_2MaxDuration);
            } else {
                let_2Clock.add(3.000000);
            }
            // Routines running outside a loop should always advance the datafile row
            if (currentLoop === psychoJS.experiment) {
              psychoJS.experiment.nextEntry(snapshot);
            }
            return Scheduler.Event.NEXT;
          }
        }
        
        
var answrita1MaxDurationReached;
var answrita1MaxDuration;
var answrita1Components;
function answrita1RoutineBegin(snapshot) {
          return async function () {
            TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
            
            //--- Prepare to start Routine 'answrita1' ---
            t = 0;
            frameN = -1;
            continueRoutine = true; // until we're told otherwise
            // keep track of whether this Routine was forcibly ended
            routineForceEnded = false;
            answrita1Clock.reset(routineTimer.getTime());
            routineTimer.add(15.000000);
            answrita1MaxDurationReached = false;
            // update component parameters for each repeat
            recall_input.setText('');
            recall_input.refresh();
            recall_input.setPlaceholder('печатать тут...');
            psychoJS.experiment.addData('answrita1.started', globalClock.getTime());
            answrita1MaxDuration = null
            // keep track of which components have finished
            answrita1Components = [];
            answrita1Components.push(recall_instr);
            answrita1Components.push(recall_input);
            
            for (const thisComponent of answrita1Components)
              if ('status' in thisComponent)
                thisComponent.status = PsychoJS.Status.NOT_STARTED;
            return Scheduler.Event.NEXT;
          }
        }
        
        
function answrita1RoutineEachFrame() {
          return async function () {
            //--- Loop for each frame of Routine 'answrita1' ---
            // get current time
            t = answrita1Clock.getTime();
            frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
            // update/draw components on each frame
            
            // *recall_instr* updates
            if (t >= 0.0 && recall_instr.status === PsychoJS.Status.NOT_STARTED) {
              // keep track of start time/frame for later
              recall_instr.tStart = t;  // (not accounting for frame time here)
              recall_instr.frameNStart = frameN;  // exact frame index
              
              recall_instr.setAutoDraw(true);
            }
            
            
            // if recall_instr is active this frame...
            if (recall_instr.status === PsychoJS.Status.STARTED) {
            }
            
            frameRemains = 0.0 + 5.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
            if (recall_instr.status === PsychoJS.Status.STARTED && t >= frameRemains) {
              // keep track of stop time/frame for later
              recall_instr.tStop = t;  // not accounting for scr refresh
              recall_instr.frameNStop = frameN;  // exact frame index
              // update status
              recall_instr.status = PsychoJS.Status.FINISHED;
              recall_instr.setAutoDraw(false);
            }
            
            
            // *recall_input* updates
            if (t >= 5.0 && recall_input.status === PsychoJS.Status.NOT_STARTED) {
              // keep track of start time/frame for later
              recall_input.tStart = t;  // (not accounting for frame time here)
              recall_input.frameNStart = frameN;  // exact frame index
              
              recall_input.setAutoDraw(true);
            }
            
            
            // if recall_input is active this frame...
            if (recall_input.status === PsychoJS.Status.STARTED) {
            }
            
            frameRemains = 5.0 + 10 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
            if (recall_input.status === PsychoJS.Status.STARTED && t >= frameRemains) {
              // keep track of stop time/frame for later
              recall_input.tStop = t;  // not accounting for scr refresh
              recall_input.frameNStop = frameN;  // exact frame index
              // update status
              recall_input.status = PsychoJS.Status.FINISHED;
              recall_input.setAutoDraw(false);
            }
            
            // check for quit (typically the Esc key)
            if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
              return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
            }
            
            // check if the Routine should terminate
            if (!continueRoutine) {  // a component has requested a forced-end of Routine
              routineForceEnded = true;
              return Scheduler.Event.NEXT;
            }
            
            continueRoutine = false;  // reverts to True if at least one component still running
            for (const thisComponent of answrita1Components)
              if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
                continueRoutine = true;
                break;
              }
            
            // refresh the screen if continuing
            if (continueRoutine && routineTimer.getTime() > 0) {
              return Scheduler.Event.FLIP_REPEAT;
            } else {
              return Scheduler.Event.NEXT;
            }
          };
        }
        
        
function answrita1RoutineEnd(snapshot) {
          return async function () {
            //--- Ending Routine 'answrita1' ---
            for (const thisComponent of answrita1Components) {
              if (typeof thisComponent.setAutoDraw === 'function') {
                thisComponent.setAutoDraw(false);
              }
            }
            psychoJS.experiment.addData('answrita1.stopped', globalClock.getTime());
            psychoJS.experiment.addData('recall_input.text',recall_input.text)
            if (routineForceEnded) {
                routineTimer.reset();} else if (answrita1MaxDurationReached) {
                answrita1Clock.add(answrita1MaxDuration);
            } else {
                answrita1Clock.add(15.000000);
            }
            // Routines running outside a loop should always advance the datafile row
            if (currentLoop === psychoJS.experiment) {
              psychoJS.experiment.nextEntry(snapshot);
            }
            return Scheduler.Event.NEXT;
          }
        }
        
        
var hankMaxDurationReached;
var _key_resp_3_allKeys;
var hankMaxDuration;
var hankComponents;
function hankRoutineBegin(snapshot) {
          return async function () {
            TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
            
            //--- Prepare to start Routine 'hank' ---
            t = 0;
            frameN = -1;
            continueRoutine = true; // until we're told otherwise
            // keep track of whether this Routine was forcibly ended
            routineForceEnded = false;
            hankClock.reset();
            routineTimer.reset();
            hankMaxDurationReached = false;
            // update component parameters for each repeat
            key_resp_3.keys = undefined;
            key_resp_3.rt = undefined;
            _key_resp_3_allKeys = [];
            psychoJS.experiment.addData('hank.started', globalClock.getTime());
            hankMaxDuration = null
            // keep track of which components have finished
            hankComponents = [];
            hankComponents.push(text_4);
            hankComponents.push(key_resp_3);
            
            for (const thisComponent of hankComponents)
              if ('status' in thisComponent)
                thisComponent.status = PsychoJS.Status.NOT_STARTED;
            return Scheduler.Event.NEXT;
          }
        }
        
        
function hankRoutineEachFrame() {
          return async function () {
            //--- Loop for each frame of Routine 'hank' ---
            // get current time
            t = hankClock.getTime();
            frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
            // update/draw components on each frame
            
            // *text_4* updates
            if (t >= 0.0 && text_4.status === PsychoJS.Status.NOT_STARTED) {
              // keep track of start time/frame for later
              text_4.tStart = t;  // (not accounting for frame time here)
              text_4.frameNStart = frameN;  // exact frame index
              
              text_4.setAutoDraw(true);
            }
            
            
            // if text_4 is active this frame...
            if (text_4.status === PsychoJS.Status.STARTED) {
            }
            
            
            // *key_resp_3* updates
            if (t >= 0.0 && key_resp_3.status === PsychoJS.Status.NOT_STARTED) {
              // keep track of start time/frame for later
              key_resp_3.tStart = t;  // (not accounting for frame time here)
              key_resp_3.frameNStart = frameN;  // exact frame index
              
              // keyboard checking is just starting
              psychoJS.window.callOnFlip(function() { key_resp_3.clock.reset(); });  // t=0 on next screen flip
              psychoJS.window.callOnFlip(function() { key_resp_3.start(); }); // start on screen flip
              psychoJS.window.callOnFlip(function() { key_resp_3.clearEvents(); });
            }
            
            // if key_resp_3 is active this frame...
            if (key_resp_3.status === PsychoJS.Status.STARTED) {
              let theseKeys = key_resp_3.getKeys({
                keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
                waitRelease: false
              });
              _key_resp_3_allKeys = _key_resp_3_allKeys.concat(theseKeys);
              if (_key_resp_3_allKeys.length > 0) {
                key_resp_3.keys = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].name;  // just the last key pressed
                key_resp_3.rt = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].rt;
                key_resp_3.duration = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].duration;
                // a response ends the routine
                continueRoutine = false;
              }
            }
            
            // check for quit (typically the Esc key)
            if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
              return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
            }
            
            // check if the Routine should terminate
            if (!continueRoutine) {  // a component has requested a forced-end of Routine
              routineForceEnded = true;
              return Scheduler.Event.NEXT;
            }
            
            continueRoutine = false;  // reverts to True if at least one component still running
            for (const thisComponent of hankComponents)
              if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
                continueRoutine = true;
                break;
              }
            
            // refresh the screen if continuing
            if (continueRoutine) {
              return Scheduler.Event.FLIP_REPEAT;
            } else {
              return Scheduler.Event.NEXT;
            }
          };
        }
        
        
function hankRoutineEnd(snapshot) {
          return async function () {
            //--- Ending Routine 'hank' ---
            for (const thisComponent of hankComponents) {
              if (typeof thisComponent.setAutoDraw === 'function') {
                thisComponent.setAutoDraw(false);
              }
            }
            psychoJS.experiment.addData('hank.stopped', globalClock.getTime());
            // update the trial handler
            if (currentLoop instanceof MultiStairHandler) {
              currentLoop.addResponse(key_resp_3.corr, level);
            }
            psychoJS.experiment.addData('key_resp_3.keys', key_resp_3.keys);
            if (typeof key_resp_3.keys !== 'undefined') {  // we had a response
                psychoJS.experiment.addData('key_resp_3.rt', key_resp_3.rt);
                psychoJS.experiment.addData('key_resp_3.duration', key_resp_3.duration);
                routineTimer.reset();
                }
            
            key_resp_3.stop();
            // the Routine "hank" was not non-slip safe, so reset the non-slip timer
            routineTimer.reset();
            
            // Routines running outside a loop should always advance the datafile row
            if (currentLoop === psychoJS.experiment) {
              psychoJS.experiment.nextEntry(snapshot);
            }
            return Scheduler.Event.NEXT;
          }
        }
        
        
var dfgdfgMaxDurationReached;
var dfgdfgMaxDuration;
var dfgdfgComponents;
function dfgdfgRoutineBegin(snapshot) {
          return async function () {
            TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
            
            //--- Prepare to start Routine 'dfgdfg' ---
            t = 0;
            frameN = -1;
            continueRoutine = true; // until we're told otherwise
            // keep track of whether this Routine was forcibly ended
            routineForceEnded = false;
            dfgdfgClock.reset(routineTimer.getTime());
            routineTimer.add(1.000000);
            dfgdfgMaxDurationReached = false;
            // update component parameters for each repeat
            // Disable downloading results to browser 
            psychoJS._saveResults = 0; 
            // Generate filename for results 
            let filename = psychoJS._experiment._experimentName + '_' + 
            psychoJS._experiment._datetime + '.csv'; 
            // Extract data object from experiment 
            let dataObj = psychoJS._experiment._trialsData; 
            // Convert data object to CSV 
            let data = [Object.keys(dataObj[0])].concat(dataObj).map(it => { 
            return Object.values(it).toString() 
            }).join('\n') 
            // Send data to OSF via DataPipe 
            console.log('Saving data...'); 
            fetch('https://pipe.jspsych.org/api/data', { 
            method: 'POST', 
            headers: { 
            'Content-Type': 'application/json', 
            Accept: '*/*', 
            }, 
            body: JSON.stringify({ 
            experimentID: 'XEIPHqYQ2VFw', // * обновить, указав experiment ID из DATAPIPE на шаге 4.3 * 
            filename: filename,  
            data: data, 
            }), 
            }).then(response => response.json()).then(data => { 
            // Log response aud force experiment end 
            console.log(data); 
            quitPsychoJS(); 
            })
            psychoJS.experiment.addData('dfgdfg.started', globalClock.getTime());
            dfgdfgMaxDuration = null
            // keep track of which components have finished
            dfgdfgComponents = [];
            dfgdfgComponents.push(text_5);
            
            for (const thisComponent of dfgdfgComponents)
              if ('status' in thisComponent)
                thisComponent.status = PsychoJS.Status.NOT_STARTED;
            return Scheduler.Event.NEXT;
          }
        }
        
        
function dfgdfgRoutineEachFrame() {
          return async function () {
            //--- Loop for each frame of Routine 'dfgdfg' ---
            // get current time
            t = dfgdfgClock.getTime();
            frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
            // update/draw components on each frame
            
            // *text_5* updates
            if (t >= 0.0 && text_5.status === PsychoJS.Status.NOT_STARTED) {
              // keep track of start time/frame for later
              text_5.tStart = t;  // (not accounting for frame time here)
              text_5.frameNStart = frameN;  // exact frame index
              
              text_5.setAutoDraw(true);
            }
            
            
            // if text_5 is active this frame...
            if (text_5.status === PsychoJS.Status.STARTED) {
            }
            
            frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
            if (text_5.status === PsychoJS.Status.STARTED && t >= frameRemains) {
              // keep track of stop time/frame for later
              text_5.tStop = t;  // not accounting for scr refresh
              text_5.frameNStop = frameN;  // exact frame index
              // update status
              text_5.status = PsychoJS.Status.FINISHED;
              text_5.setAutoDraw(false);
            }
            
            // check for quit (typically the Esc key)
            if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
              return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
            }
            
            // check if the Routine should terminate
            if (!continueRoutine) {  // a component has requested a forced-end of Routine
              routineForceEnded = true;
              return Scheduler.Event.NEXT;
            }
            
            continueRoutine = false;  // reverts to True if at least one component still running
            for (const thisComponent of dfgdfgComponents)
              if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
                continueRoutine = true;
                break;
              }
            
            // refresh the screen if continuing
            if (continueRoutine && routineTimer.getTime() > 0) {
              return Scheduler.Event.FLIP_REPEAT;
            } else {
              return Scheduler.Event.NEXT;
            }
          };
        }
        
        
function dfgdfgRoutineEnd(snapshot) {
          return async function () {
            //--- Ending Routine 'dfgdfg' ---
            for (const thisComponent of dfgdfgComponents) {
              if (typeof thisComponent.setAutoDraw === 'function') {
                thisComponent.setAutoDraw(false);
              }
            }
            psychoJS.experiment.addData('dfgdfg.stopped', globalClock.getTime());
            if (routineForceEnded) {
                routineTimer.reset();} else if (dfgdfgMaxDurationReached) {
                dfgdfgClock.add(dfgdfgMaxDuration);
            } else {
                dfgdfgClock.add(1.000000);
            }
            // Routines running outside a loop should always advance the datafile row
            if (currentLoop === psychoJS.experiment) {
              psychoJS.experiment.nextEntry(snapshot);
            }
            return Scheduler.Event.NEXT;
          }
        }
        
        
function importConditions(currentLoop) {
          return async function () {
            psychoJS.importAttributes(currentLoop.getCurrentTrial());
            return Scheduler.Event.NEXT;
            };
        }
        
        
async function quitPsychoJS(message, isCompleted) {
          // Check for and save orphaned data
          if (psychoJS.experiment.isEntryEmpty()) {
            psychoJS.experiment.nextEntry();
          }
          psychoJS.window.close();
          psychoJS.quit({message: message, isCompleted: isCompleted});
          
          return Scheduler.Event.QUIT;
        }
