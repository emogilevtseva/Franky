#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2026.1.1),
    on March 26, 2026, at 17:54
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

# --- Import packages ---
from psychopy import locale_setup
from psychopy import prefs
from psychopy import plugins
plugins.activatePlugins()
from psychopy import sound, gui, visual, core, data, event, logging, clock, colors, layout, hardware
from psychopy.tools import environmenttools
from psychopy.constants import (
    NOT_STARTED, STARTED, PLAYING, PAUSED, STOPPED, STOPPING, FINISHED, PRESSED, 
    RELEASED, FOREVER, priority
)

import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle, choice as randchoice
import os  # handy system and path functions
import sys  # to get file system encoding

import psychopy.iohub as io
from psychopy.hardware import keyboard

# --- Setup global variables (available in all functions) ---
# create a device manager to handle hardware (keyboards, mice, mirophones, speakers, etc.)
deviceManager = hardware.DeviceManager()
# ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
# store info about the experiment session
psychopyVersion = '2026.1.1'
expName = 'colorcomp_trial_2'  # from the Builder filename that created this script
expVersion = ''
# a list of functions to run when the experiment ends (starts off blank)
runAtExit = []
# information about this experiment
expInfo = {
    'participant': '',
    'date|hid': data.getDateStr(),
    'expName|hid': expName,
    'expVersion|hid': expVersion,
    'psychopyVersion|hid': psychopyVersion,
}

# --- Define some variables which will change depending on pilot mode ---
'''
To run in pilot mode, either use the run/pilot toggle in Builder, Coder and Runner, 
or run the experiment with `--pilot` as an argument. To change what pilot 
#mode does, check out the 'Pilot mode' tab in preferences.
'''
# work out from system args whether we are running in pilot mode
PILOTING = core.setPilotModeFromArgs()
# start off with values from experiment settings
_fullScr = True
_winSize = [1536, 864]
# if in pilot mode, apply overrides according to preferences
if PILOTING:
    # force windowed mode
    if prefs.piloting['forceWindowed']:
        _fullScr = False
        # set window size
        _winSize = prefs.piloting['forcedWindowSize']
    # replace default participant ID
    if prefs.piloting['replaceParticipantID']:
        expInfo['participant'] = 'pilot'

def showExpInfoDlg(expInfo):
    """
    Show participant info dialog.
    Parameters
    ==========
    expInfo : dict
        Information about this experiment.
    
    Returns
    ==========
    dict
        Information about this experiment.
    """
    # show participant info dialog
    dlg = gui.DlgFromDict(
        dictionary=expInfo, sortKeys=False, title=expName, alwaysOnTop=True
    )
    if dlg.OK == False:
        core.quit()  # user pressed cancel
    # return expInfo
    return expInfo


def setupData(expInfo, dataDir=None):
    """
    Make an ExperimentHandler to handle trials and saving.
    
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    dataDir : Path, str or None
        Folder to save the data to, leave as None to create a folder in the current directory.    
    Returns
    ==========
    psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    """
    # remove dialog-specific syntax from expInfo
    for key, val in expInfo.copy().items():
        newKey, _ = data.utils.parsePipeSyntax(key)
        expInfo[newKey] = expInfo.pop(key)
    
    # data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
    if dataDir is None:
        dataDir = _thisDir
    filename = u'data/%s_%s_%s' % (expInfo['participant'], expName, expInfo['date'])
    # make sure filename is relative to dataDir
    if os.path.isabs(filename):
        dataDir = os.path.commonprefix([dataDir, filename])
        filename = os.path.relpath(filename, dataDir)
    
    # an ExperimentHandler isn't essential but helps with data saving
    thisExp = data.ExperimentHandler(
        name=expName, version=expVersion,
        extraInfo=expInfo, runtimeInfo=None,
        originPath='C:\\Users\\4ucks\\OneDrive\\Рабочий стол\\visimage_colorcomp\\colorcomp_trial_2.py',
        savePickle=True, saveWideText=True,
        dataFileName=dataDir + os.sep + filename, sortColumns='time'
    )
    # store pilot mode in data file
    thisExp.addData('piloting', PILOTING, priority=priority.LOW)
    thisExp.setPriority('thisRow.t', priority.CRITICAL)
    thisExp.setPriority('expName', priority.LOW)
    # return experiment handler
    return thisExp


def setupLogging(filename):
    """
    Setup a log file and tell it what level to log at.
    
    Parameters
    ==========
    filename : str or pathlib.Path
        Filename to save log file and data files as, doesn't need an extension.
    
    Returns
    ==========
    psychopy.logging.LogFile
        Text stream to receive inputs from the logging system.
    """
    # set how much information should be printed to the console / app
    if PILOTING:
        logging.console.setLevel(
            prefs.piloting['pilotConsoleLoggingLevel']
        )
    else:
        logging.console.setLevel('warning')
    # save a log file for detail verbose info
    logFile = logging.LogFile(filename+'.log')
    if PILOTING:
        logFile.setLevel(
            prefs.piloting['pilotLoggingLevel']
        )
    else:
        logFile.setLevel(
            logging.getLevel('exp')
        )
    
    return logFile


def setupWindow(expInfo=None, win=None):
    """
    Setup the Window
    
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    win : psychopy.visual.Window
        Window to setup - leave as None to create a new window.
    
    Returns
    ==========
    psychopy.visual.Window
        Window in which to run this experiment.
    """
    if PILOTING:
        logging.debug('Fullscreen settings ignored as running in pilot mode.')
    
    if win is None:
        # if not given a window to setup, make one
        win = visual.Window(
            size=_winSize, fullscr=_fullScr, screen=0,
            winType='pyglet', allowGUI=False, allowStencil=False,
            monitor='testMonitor', color='black', colorSpace='rgb',
            backgroundImage='', backgroundFit='none',
            blendMode='avg', useFBO=True,
            units='height',
            checkTiming=False  # we're going to do this ourselves in a moment
        )
    else:
        # if we have a window, just set the attributes which are safe to set
        win.color = 'black'
        win.colorSpace = 'rgb'
        win.backgroundImage = ''
        win.backgroundFit = 'none'
        win.units = 'height'
    if expInfo is not None:
        # get/measure frame rate if not already in expInfo
        if win._monitorFrameRate is None:
            win._monitorFrameRate = win.getActualFrameRate(infoMsg='Attempting to measure frame rate of screen, please wait...')
        expInfo['frameRate'] = win._monitorFrameRate
    win.hideMessage()
    if PILOTING:
        # show a visual indicator if we're in piloting mode
        if prefs.piloting['showPilotingIndicator']:
            win.showPilotingIndicator()
        # always show the mouse in piloting mode
        if prefs.piloting['forceMouseVisible']:
            win.mouseVisible = True
    
    return win


def setupDevices(expInfo, thisExp, win):
    """
    Setup whatever devices are available (mouse, keyboard, speaker, eyetracker, etc.) and add them to 
    the device manager (deviceManager)
    
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    win : psychopy.visual.Window
        Window in which to run this experiment.
    Returns
    ==========
    bool
        True if completed successfully.
    """
    # --- Setup input devices ---
    ioConfig = {}
    
    # Setup iohub keyboard
    ioConfig['Keyboard'] = dict(use_keymap='psychopy')
    
    # Setup iohub experiment
    ioConfig['Experiment'] = dict(filename=thisExp.dataFileName)
    
    # Start ioHub server
    ioServer = io.launchHubServer(window=win, **ioConfig)
    
    # store ioServer object in the device manager
    deviceManager.ioServer = ioServer
    
    # create a default keyboard (e.g. to check for escape)
    if deviceManager.getDevice('defaultKeyboard') is None:
        deviceManager.addDevice(
            deviceClass='keyboard', deviceName='defaultKeyboard', backend='iohub'
        )
    # return True if completed successfully
    return True

def pauseExperiment(thisExp, win=None, timers=[], currentRoutine=None):
    """
    Pause this experiment, preventing the flow from advancing to the next routine until resumed.
    
    Parameters
    ==========
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    win : psychopy.visual.Window
        Window for this experiment.
    timers : list, tuple
        List of timers to reset once pausing is finished.
    currentRoutine : psychopy.data.Routine
        Current Routine we are in at time of pausing, if any. This object tells PsychoPy what Components to pause/play/dispatch.
    """
    # if we are not paused, do nothing
    if thisExp.status != PAUSED:
        return
    
    # start a timer to figure out how long we're paused for
    pauseTimer = core.Clock()
    # pause any playback components
    if currentRoutine is not None:
        for comp in currentRoutine.getPlaybackComponents():
            comp.pause()
    # make sure we have a keyboard
    defaultKeyboard = deviceManager.getDevice('defaultKeyboard')
    if defaultKeyboard is None:
        defaultKeyboard = deviceManager.addKeyboard(
            deviceClass='keyboard',
            deviceName='defaultKeyboard',
            backend='ioHub',
        )
    # run a while loop while we wait to unpause
    while thisExp.status == PAUSED:
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=['escape']):
            endExperiment(thisExp, win=win)
        # dispatch messages on response components
        if currentRoutine is not None:
            for comp in currentRoutine.getDispatchComponents():
                comp.device.dispatchMessages()
        # sleep 1ms so other threads can execute
        clock.time.sleep(0.001)
    # if stop was requested while paused, quit
    if thisExp.status == FINISHED:
        endExperiment(thisExp, win=win)
    # resume any playback components
    if currentRoutine is not None:
        for comp in currentRoutine.getPlaybackComponents():
            comp.play()
    # reset any timers
    for timer in timers:
        timer.addTime(-pauseTimer.getTime())


def run(expInfo, thisExp, win, globalClock=None, thisSession=None):
    """
    Run the experiment flow.
    
    Parameters
    ==========
    expInfo : dict
        Information about this experiment, created by the `setupExpInfo` function.
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    psychopy.visual.Window
        Window in which to run this experiment.
    globalClock : psychopy.core.clock.Clock or None
        Clock to get global time from - supply None to make a new one.
    thisSession : psychopy.session.Session or None
        Handle of the Session object this experiment is being run from, if any.
    """
    # mark experiment as started
    thisExp.status = STARTED
    # update experiment info
    expInfo['date'] = data.getDateStr()
    expInfo['expName'] = expName
    expInfo['expVersion'] = expVersion
    expInfo['psychopyVersion'] = psychopyVersion
    # make sure window is set to foreground to prevent losing focus
    win.winHandle.activate()
    # make sure variables created by exec are available globally
    exec = environmenttools.setExecEnvironment(globals())
    # get device handles from dict of input devices
    ioServer = deviceManager.ioServer
    # get/create a default keyboard (e.g. to check for escape)
    defaultKeyboard = deviceManager.getDevice('defaultKeyboard')
    if defaultKeyboard is None:
        deviceManager.addDevice(
            deviceClass='keyboard', deviceName='defaultKeyboard', backend='ioHub'
        )
    eyetracker = deviceManager.getDevice('eyetracker')
    # make sure we're running in the directory for this experiment
    os.chdir(_thisDir)
    # get filename from ExperimentHandler for convenience
    filename = thisExp.dataFileName
    frameTolerance = 0.001  # how close to onset before 'same' frame
    endExpNow = False  # flag for 'escape' or other condition => quit the exp
    # get frame duration from frame rate in expInfo
    if 'frameRate' in expInfo and expInfo['frameRate'] is not None:
        frameDur = 1.0 / round(expInfo['frameRate'])
    else:
        frameDur = 1.0 / 60.0  # could not measure, so guess
    
    # Start Code - component code to be run after the window creation
    
    # --- Initialize components for Routine "hello" ---
    hello_text = visual.TextStim(win=win, name='hello_text',
        text='Спасибо, что участвуете в исследовании!\n\nТак как вы проходите эксперимент на компьютере, перед началом необходимо настроить ваш экран.\n\nЧтобы продолжить, нажмите ПРОБЕЛ.',
        font='Open Sans',
        pos=(0, 0), draggable=False, height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    hello_keypress = keyboard.Keyboard(deviceName='defaultKeyboard')
    
    # --- Initialize components for Routine "settings" ---
    settings_toptxt = visual.TextStim(win=win, name='settings_toptxt',
        text='Пожалуйста, выстроите яркость экрана так, чтобы комфортно видеть разницу между оттенками ниже.',
        font='Open Sans',
        pos=(0, 0.25), draggable=False, height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    settings_bottomtxt = visual.TextStim(win=win, name='settings_bottomtxt',
        text='Когда будете готовы, нажмите ПРОБЕЛ.',
        font='Open Sans',
        pos=(0, -0.25), draggable=False, height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-1.0);
    settings_color1 = visual.Rect(
        win=win, name='settings_color1',
        width=(0.1, 0.1)[0], height=(0.1, 0.1)[1],
        ori=0.0, pos=(-0.1, 0), draggable=False, anchor='center',
        lineWidth=1.0,
        colorSpace='rgb', lineColor='white', fillColor=[0.6000, 0.6000, 0.6000],
        opacity=0.3, depth=-2.0, interpolate=True)
    settings_color2 = visual.Rect(
        win=win, name='settings_color2',
        width=(0.1, 0.1)[0], height=(0.1, 0.1)[1],
        ori=0.0, pos=(0.1, 0), draggable=False, anchor='center',
        lineWidth=1.0,
        colorSpace='rgb', lineColor='white', fillColor=[0.8000, 0.8000, 0.8000],
        opacity=0.3, depth=-3.0, interpolate=True)
    settings_keypress = keyboard.Keyboard(deviceName='defaultKeyboard')
    
    # --- Initialize components for Routine "instr" ---
    instr_text = visual.TextStim(win=win, name='instr_text',
        text='Вам будет показаны 2 последовательности цветных квадратов, сделанных по аналогии друг другу. Они будут появляться друг за другом, сначала полная, потом — с одним пропущенным, черным, квадратом.\n \nВам нужно представить недостающий цвет согласно последовательности и выбрать тот квадрат из представленных двух вариантов, который соответствует представленному цвету.\nВыбор нужного квадрата производится клавишами "←" и "→". На этапе тренировки у вас будут подсказки по клавишам под вариантами ответа.\n\nЧтобы начать тренировку, нажмите ПРОБЕЛ.',
        font='Open Sans',
        pos=(0, 0), draggable=False, height=0.04, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=0.0);
    instr_resp = keyboard.Keyboard(deviceName='defaultKeyboard')
    
    # --- Initialize components for Routine "CC_trial" ---
    clr1examp = visual.Rect(
        win=win, name='clr1examp',
        width=(0.1, 0.1)[0], height=(0.1, 0.1)[1],
        ori=0.0, pos=(-0.3375, 0.075), draggable=False, anchor='center',
        lineWidth=1.0,
        colorSpace='rgb', lineColor='white', fillColor='white',
        opacity=None, depth=0.0, interpolate=True)
    clr2examp = visual.Rect(
        win=win, name='clr2examp',
        width=(0.1, 0.1)[0], height=(0.1, 0.1)[1],
        ori=0.0, pos=(-0.1125, 0.075), draggable=False, anchor='center',
        lineWidth=1.0,
        colorSpace='rgb', lineColor='white', fillColor='white',
        opacity=None, depth=-1.0, interpolate=True)
    clr3examp = visual.Rect(
        win=win, name='clr3examp',
        width=(0.1, 0.1)[0], height=(0.1, 0.1)[1],
        ori=0.0, pos=(0.1125, 0.075), draggable=False, anchor='center',
        lineWidth=1.0,
        colorSpace='rgb', lineColor='white', fillColor='white',
        opacity=None, depth=-2.0, interpolate=True)
    clr4examp = visual.Rect(
        win=win, name='clr4examp',
        width=(0.1, 0.1)[0], height=(0.1, 0.1)[1],
        ori=0.0, pos=(0.3375, 0.075), draggable=False, anchor='center',
        lineWidth=1.0,
        colorSpace='rgb', lineColor='white', fillColor='white',
        opacity=None, depth=-3.0, interpolate=True)
    clr1trial = visual.Rect(
        win=win, name='clr1trial',
        width=(0.1, 0.1)[0], height=(0.1, 0.1)[1],
        ori=0.0, pos=(-0.3375, -0.1), draggable=False, anchor='center',
        lineWidth=1.0,
        colorSpace='rgb', lineColor='white', fillColor='white',
        opacity=None, depth=-4.0, interpolate=True)
    clr2trail = visual.Rect(
        win=win, name='clr2trail',
        width=(0.1, 0.1)[0], height=(0.1, 0.1)[1],
        ori=0.0, pos=(-0.1125, -0.1), draggable=False, anchor='center',
        lineWidth=1.0,
        colorSpace='rgb', lineColor='white', fillColor='white',
        opacity=None, depth=-5.0, interpolate=True)
    clr3trail = visual.Rect(
        win=win, name='clr3trail',
        width=(0.1, 0.1)[0], height=(0.1, 0.1)[1],
        ori=0.0, pos=(0.1125, -0.1), draggable=False, anchor='center',
        lineWidth=1.0,
        colorSpace='rgb', lineColor='white', fillColor='white',
        opacity=None, depth=-6.0, interpolate=True)
    clr4trail = visual.Rect(
        win=win, name='clr4trail',
        width=(0.1, 0.1)[0], height=(0.1, 0.1)[1],
        ori=0.0, pos=(0.3375, -0.1), draggable=False, anchor='center',
        lineWidth=1.0,
        colorSpace='rgb', lineColor='white', fillColor='white',
        opacity=None, depth=-7.0, interpolate=True)
    key_skip = keyboard.Keyboard(deviceName='defaultKeyboard')
    MASKclr1tr = visual.Rect(
        win=win, name='MASKclr1tr',
        width=(0.1, 0.1)[0], height=(0.1, 0.1)[1],
        ori=0.0, pos=(-0.3375, -0.1), draggable=False, anchor='center',
        lineWidth=1.0,
        colorSpace='rgb', lineColor='white', fillColor='white',
        opacity=None, depth=-9.0, interpolate=True)
    MASKclr2tr = visual.Rect(
        win=win, name='MASKclr2tr',
        width=(0.1, 0.1)[0], height=(0.1, 0.1)[1],
        ori=0.0, pos=(-0.1125, -0.1), draggable=False, anchor='center',
        lineWidth=1.0,
        colorSpace='rgb', lineColor='white', fillColor='white',
        opacity=None, depth=-10.0, interpolate=True)
    MASKclr3tr = visual.Rect(
        win=win, name='MASKclr3tr',
        width=(0.1, 0.1)[0], height=(0.1, 0.1)[1],
        ori=0.0, pos=(0.1125, -0.1), draggable=False, anchor='center',
        lineWidth=1.0,
        colorSpace='rgb', lineColor='white', fillColor='white',
        opacity=None, depth=-11.0, interpolate=True)
    MASKclr4tr = visual.Rect(
        win=win, name='MASKclr4tr',
        width=(0.1, 0.1)[0], height=(0.1, 0.1)[1],
        ori=0.0, pos=(0.3375, -0.1), draggable=False, anchor='center',
        lineWidth=1.0,
        colorSpace='rgb', lineColor='white', fillColor='white',
        opacity=None, depth=-12.0, interpolate=True)
    
    # --- Initialize components for Routine "blank" ---
    fix = visual.ShapeStim(
        win=win, name='fix', vertices='cross',
        size=(0.08, 0.08),
        ori=0.0, pos=(0, 0), draggable=False, anchor='center',
        lineWidth=1.0,
        colorSpace='rgb', lineColor='white', fillColor='white',
        opacity=None, depth=0.0, interpolate=True)
    
    # --- Initialize components for Routine "CC_trainAnsw" ---
    l_point_2 = visual.Rect(
        win=win, name='l_point_2',
        width=(0.1, 0.1)[0], height=(0.1, 0.1)[1],
        ori=0.0, pos=(-0.2, 0), draggable=False, anchor='center',
        lineWidth=1.0,
        colorSpace='rgb', lineColor='white', fillColor='white',
        opacity=None, depth=0.0, interpolate=True)
    r_point_2 = visual.Rect(
        win=win, name='r_point_2',
        width=(0.1, 0.1)[0], height=(0.1, 0.1)[1],
        ori=0.0, pos=(0.2, 0), draggable=False, anchor='center',
        lineWidth=1.0,
        colorSpace='rgb', lineColor='white', fillColor='white',
        opacity=None, depth=-1.0, interpolate=True)
    CC_resp_2 = keyboard.Keyboard(deviceName='defaultKeyboard')
    l_hint = visual.TextStim(win=win, name='l_hint',
        text='←',
        font='Open Sans',
        pos=(-0.2, -0.2), draggable=False, height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-3.0);
    r_hint = visual.TextStim(win=win, name='r_hint',
        text='→',
        font='Open Sans',
        pos=(0.2, -0.2), draggable=False, height=0.05, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-4.0);
    
    # --- Initialize components for Routine "FB" ---
    # Run 'Begin Experiment' code from FB_code_2
    msg='empty!'#if this comes up we forgot to update the msg!
    try_corr=0
    FB_text_2 = visual.TextStim(win=win, name='FB_text_2',
        text='',
        font='Open Sans',
        pos=(0, 0.2), draggable=False, height=0.1, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-1.0);
    clractual = visual.Rect(
        win=win, name='clractual',
        width=(0.1, 0.1)[0], height=(0.1, 0.1)[1],
        ori=0.0, pos=(0, 0), draggable=False, anchor='center',
        lineWidth=1.0,
        colorSpace='rgb', lineColor='white', fillColor='white',
        opacity=None, depth=-2.0, interpolate=True)
    
    # --- Initialize components for Routine "blank" ---
    fix = visual.ShapeStim(
        win=win, name='fix', vertices='cross',
        size=(0.08, 0.08),
        ori=0.0, pos=(0, 0), draggable=False, anchor='center',
        lineWidth=1.0,
        colorSpace='rgb', lineColor='white', fillColor='white',
        opacity=None, depth=0.0, interpolate=True)
    
    # --- Initialize components for Routine "instr2" ---
    # Run 'Begin Experiment' code from correct_FB
    final_corr = 0
    train_txt = "no text"
    text = visual.TextStim(win=win, name='text',
        text='',
        font='Open Sans',
        pos=(0, 0), draggable=False, height=0.04, wrapWidth=None, ori=0.0, 
        color='white', colorSpace='rgb', opacity=None, 
        languageStyle='LTR',
        depth=-1.0);
    key_resp = keyboard.Keyboard(deviceName='defaultKeyboard')
    
    # --- Initialize components for Routine "CC_trial" ---
    clr1examp = visual.Rect(
        win=win, name='clr1examp',
        width=(0.1, 0.1)[0], height=(0.1, 0.1)[1],
        ori=0.0, pos=(-0.3375, 0.075), draggable=False, anchor='center',
        lineWidth=1.0,
        colorSpace='rgb', lineColor='white', fillColor='white',
        opacity=None, depth=0.0, interpolate=True)
    clr2examp = visual.Rect(
        win=win, name='clr2examp',
        width=(0.1, 0.1)[0], height=(0.1, 0.1)[1],
        ori=0.0, pos=(-0.1125, 0.075), draggable=False, anchor='center',
        lineWidth=1.0,
        colorSpace='rgb', lineColor='white', fillColor='white',
        opacity=None, depth=-1.0, interpolate=True)
    clr3examp = visual.Rect(
        win=win, name='clr3examp',
        width=(0.1, 0.1)[0], height=(0.1, 0.1)[1],
        ori=0.0, pos=(0.1125, 0.075), draggable=False, anchor='center',
        lineWidth=1.0,
        colorSpace='rgb', lineColor='white', fillColor='white',
        opacity=None, depth=-2.0, interpolate=True)
    clr4examp = visual.Rect(
        win=win, name='clr4examp',
        width=(0.1, 0.1)[0], height=(0.1, 0.1)[1],
        ori=0.0, pos=(0.3375, 0.075), draggable=False, anchor='center',
        lineWidth=1.0,
        colorSpace='rgb', lineColor='white', fillColor='white',
        opacity=None, depth=-3.0, interpolate=True)
    clr1trial = visual.Rect(
        win=win, name='clr1trial',
        width=(0.1, 0.1)[0], height=(0.1, 0.1)[1],
        ori=0.0, pos=(-0.3375, -0.1), draggable=False, anchor='center',
        lineWidth=1.0,
        colorSpace='rgb', lineColor='white', fillColor='white',
        opacity=None, depth=-4.0, interpolate=True)
    clr2trail = visual.Rect(
        win=win, name='clr2trail',
        width=(0.1, 0.1)[0], height=(0.1, 0.1)[1],
        ori=0.0, pos=(-0.1125, -0.1), draggable=False, anchor='center',
        lineWidth=1.0,
        colorSpace='rgb', lineColor='white', fillColor='white',
        opacity=None, depth=-5.0, interpolate=True)
    clr3trail = visual.Rect(
        win=win, name='clr3trail',
        width=(0.1, 0.1)[0], height=(0.1, 0.1)[1],
        ori=0.0, pos=(0.1125, -0.1), draggable=False, anchor='center',
        lineWidth=1.0,
        colorSpace='rgb', lineColor='white', fillColor='white',
        opacity=None, depth=-6.0, interpolate=True)
    clr4trail = visual.Rect(
        win=win, name='clr4trail',
        width=(0.1, 0.1)[0], height=(0.1, 0.1)[1],
        ori=0.0, pos=(0.3375, -0.1), draggable=False, anchor='center',
        lineWidth=1.0,
        colorSpace='rgb', lineColor='white', fillColor='white',
        opacity=None, depth=-7.0, interpolate=True)
    key_skip = keyboard.Keyboard(deviceName='defaultKeyboard')
    MASKclr1tr = visual.Rect(
        win=win, name='MASKclr1tr',
        width=(0.1, 0.1)[0], height=(0.1, 0.1)[1],
        ori=0.0, pos=(-0.3375, -0.1), draggable=False, anchor='center',
        lineWidth=1.0,
        colorSpace='rgb', lineColor='white', fillColor='white',
        opacity=None, depth=-9.0, interpolate=True)
    MASKclr2tr = visual.Rect(
        win=win, name='MASKclr2tr',
        width=(0.1, 0.1)[0], height=(0.1, 0.1)[1],
        ori=0.0, pos=(-0.1125, -0.1), draggable=False, anchor='center',
        lineWidth=1.0,
        colorSpace='rgb', lineColor='white', fillColor='white',
        opacity=None, depth=-10.0, interpolate=True)
    MASKclr3tr = visual.Rect(
        win=win, name='MASKclr3tr',
        width=(0.1, 0.1)[0], height=(0.1, 0.1)[1],
        ori=0.0, pos=(0.1125, -0.1), draggable=False, anchor='center',
        lineWidth=1.0,
        colorSpace='rgb', lineColor='white', fillColor='white',
        opacity=None, depth=-11.0, interpolate=True)
    MASKclr4tr = visual.Rect(
        win=win, name='MASKclr4tr',
        width=(0.1, 0.1)[0], height=(0.1, 0.1)[1],
        ori=0.0, pos=(0.3375, -0.1), draggable=False, anchor='center',
        lineWidth=1.0,
        colorSpace='rgb', lineColor='white', fillColor='white',
        opacity=None, depth=-12.0, interpolate=True)
    
    # --- Initialize components for Routine "blank" ---
    fix = visual.ShapeStim(
        win=win, name='fix', vertices='cross',
        size=(0.08, 0.08),
        ori=0.0, pos=(0, 0), draggable=False, anchor='center',
        lineWidth=1.0,
        colorSpace='rgb', lineColor='white', fillColor='white',
        opacity=None, depth=0.0, interpolate=True)
    
    # --- Initialize components for Routine "CC_answer" ---
    l_point = visual.Rect(
        win=win, name='l_point',
        width=(0.1, 0.1)[0], height=(0.1, 0.1)[1],
        ori=0.0, pos=(-0.2, 0), draggable=False, anchor='center',
        lineWidth=1.0,
        colorSpace='rgb', lineColor='white', fillColor='white',
        opacity=None, depth=0.0, interpolate=True)
    r_point = visual.Rect(
        win=win, name='r_point',
        width=(0.1, 0.1)[0], height=(0.1, 0.1)[1],
        ori=0.0, pos=(0.2, 0), draggable=False, anchor='center',
        lineWidth=1.0,
        colorSpace='rgb', lineColor='white', fillColor='white',
        opacity=None, depth=-1.0, interpolate=True)
    CC_resp = keyboard.Keyboard(deviceName='defaultKeyboard')
    
    # --- Initialize components for Routine "blank" ---
    fix = visual.ShapeStim(
        win=win, name='fix', vertices='cross',
        size=(0.08, 0.08),
        ori=0.0, pos=(0, 0), draggable=False, anchor='center',
        lineWidth=1.0,
        colorSpace='rgb', lineColor='white', fillColor='white',
        opacity=None, depth=0.0, interpolate=True)
    
    # create some handy timers
    
    # global clock to track the time since experiment started
    if globalClock is None:
        # create a clock if not given one
        globalClock = core.Clock()
    if isinstance(globalClock, str):
        # if given a string, make a clock accoridng to it
        if globalClock == 'float':
            # get timestamps as a simple value
            globalClock = core.Clock(format='float')
        elif globalClock == 'iso':
            # get timestamps in ISO format
            globalClock = core.Clock(format='%Y-%m-%d_%H:%M:%S.%f%z')
        else:
            # get timestamps in a custom format
            globalClock = core.Clock(format=globalClock)
    if ioServer is not None:
        ioServer.syncClock(globalClock)
    logging.setDefaultClock(globalClock)
    if eyetracker is not None:
        eyetracker.enableEventReporting()
    # routine timer to track time remaining of each (possibly non-slip) routine
    routineTimer = core.Clock()
    win.flip()  # flip window to reset last flip timer
    # store the exact time the global clock started
    expInfo['expStart'] = data.getDateStr(
        format='%Y-%m-%d %Hh%M.%S.%f %z', fractionalSecondDigits=6
    )
    
    # --- Prepare to start Routine "hello" ---
    # create an object to store info about Routine hello
    hello = data.Routine(
        name='hello',
        components=[hello_text, hello_keypress],
    )
    hello.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    # create starting attributes for hello_keypress
    hello_keypress.keys = []
    hello_keypress.rt = []
    _hello_keypress_allKeys = []
    # store start times for hello
    hello.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    hello.tStart = globalClock.getTime(format='float')
    hello.status = STARTED
    thisExp.addData('hello.started', hello.tStart)
    hello.maxDuration = None
    # keep track of which components have finished
    helloComponents = hello.components
    for thisComponent in hello.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "hello" ---
    thisExp.currentRoutine = hello
    hello.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *hello_text* updates
        
        # if hello_text is starting this frame...
        if hello_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            hello_text.frameNStart = frameN  # exact frame index
            hello_text.tStart = t  # local t and not account for scr refresh
            hello_text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(hello_text, 'tStartRefresh')  # time at next scr refresh
            # update status
            hello_text.status = STARTED
            hello_text.setAutoDraw(True)
        
        # if hello_text is active this frame...
        if hello_text.status == STARTED:
            # update params
            pass
        
        # *hello_keypress* updates
        waitOnFlip = False
        
        # if hello_keypress is starting this frame...
        if hello_keypress.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            hello_keypress.frameNStart = frameN  # exact frame index
            hello_keypress.tStart = t  # local t and not account for scr refresh
            hello_keypress.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(hello_keypress, 'tStartRefresh')  # time at next scr refresh
            # update status
            hello_keypress.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(hello_keypress.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(hello_keypress.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if hello_keypress.status == STARTED and not waitOnFlip:
            theseKeys = hello_keypress.getKeys(keyList=['space'], ignoreKeys=["escape"], waitRelease=False)
            _hello_keypress_allKeys.extend(theseKeys)
            if len(_hello_keypress_allKeys):
                hello_keypress.keys = _hello_keypress_allKeys[-1].name  # just the last key pressed
                hello_keypress.rt = _hello_keypress_allKeys[-1].rt
                hello_keypress.duration = _hello_keypress_allKeys[-1].duration
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer, globalClock], 
                currentRoutine=hello,
            )
            # skip the frame we paused on
            continue
        
        # has a Component requested the Routine to end?
        if not continueRoutine:
            hello.forceEnded = routineForceEnded = True
        # has the Routine been forcibly ended?
        if hello.forceEnded or routineForceEnded:
            break
        # has every Component finished?
        continueRoutine = False
        for thisComponent in hello.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "hello" ---
    for thisComponent in hello.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for hello
    hello.tStop = globalClock.getTime(format='float')
    hello.tStopRefresh = tThisFlipGlobal
    thisExp.addData('hello.stopped', hello.tStop)
    thisExp.nextEntry()
    # the Routine "hello" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "settings" ---
    # create an object to store info about Routine settings
    settings = data.Routine(
        name='settings',
        components=[settings_toptxt, settings_bottomtxt, settings_color1, settings_color2, settings_keypress],
    )
    settings.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    # create starting attributes for settings_keypress
    settings_keypress.keys = []
    settings_keypress.rt = []
    _settings_keypress_allKeys = []
    # store start times for settings
    settings.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    settings.tStart = globalClock.getTime(format='float')
    settings.status = STARTED
    thisExp.addData('settings.started', settings.tStart)
    settings.maxDuration = None
    # keep track of which components have finished
    settingsComponents = settings.components
    for thisComponent in settings.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "settings" ---
    thisExp.currentRoutine = settings
    settings.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *settings_toptxt* updates
        
        # if settings_toptxt is starting this frame...
        if settings_toptxt.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            settings_toptxt.frameNStart = frameN  # exact frame index
            settings_toptxt.tStart = t  # local t and not account for scr refresh
            settings_toptxt.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(settings_toptxt, 'tStartRefresh')  # time at next scr refresh
            # update status
            settings_toptxt.status = STARTED
            settings_toptxt.setAutoDraw(True)
        
        # if settings_toptxt is active this frame...
        if settings_toptxt.status == STARTED:
            # update params
            pass
        
        # *settings_bottomtxt* updates
        
        # if settings_bottomtxt is starting this frame...
        if settings_bottomtxt.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            settings_bottomtxt.frameNStart = frameN  # exact frame index
            settings_bottomtxt.tStart = t  # local t and not account for scr refresh
            settings_bottomtxt.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(settings_bottomtxt, 'tStartRefresh')  # time at next scr refresh
            # update status
            settings_bottomtxt.status = STARTED
            settings_bottomtxt.setAutoDraw(True)
        
        # if settings_bottomtxt is active this frame...
        if settings_bottomtxt.status == STARTED:
            # update params
            pass
        
        # *settings_color1* updates
        
        # if settings_color1 is starting this frame...
        if settings_color1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            settings_color1.frameNStart = frameN  # exact frame index
            settings_color1.tStart = t  # local t and not account for scr refresh
            settings_color1.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(settings_color1, 'tStartRefresh')  # time at next scr refresh
            # update status
            settings_color1.status = STARTED
            settings_color1.setAutoDraw(True)
        
        # if settings_color1 is active this frame...
        if settings_color1.status == STARTED:
            # update params
            pass
        
        # *settings_color2* updates
        
        # if settings_color2 is starting this frame...
        if settings_color2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            settings_color2.frameNStart = frameN  # exact frame index
            settings_color2.tStart = t  # local t and not account for scr refresh
            settings_color2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(settings_color2, 'tStartRefresh')  # time at next scr refresh
            # update status
            settings_color2.status = STARTED
            settings_color2.setAutoDraw(True)
        
        # if settings_color2 is active this frame...
        if settings_color2.status == STARTED:
            # update params
            pass
        
        # *settings_keypress* updates
        waitOnFlip = False
        
        # if settings_keypress is starting this frame...
        if settings_keypress.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            settings_keypress.frameNStart = frameN  # exact frame index
            settings_keypress.tStart = t  # local t and not account for scr refresh
            settings_keypress.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(settings_keypress, 'tStartRefresh')  # time at next scr refresh
            # update status
            settings_keypress.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(settings_keypress.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(settings_keypress.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if settings_keypress.status == STARTED and not waitOnFlip:
            theseKeys = settings_keypress.getKeys(keyList=['space'], ignoreKeys=["escape"], waitRelease=False)
            _settings_keypress_allKeys.extend(theseKeys)
            if len(_settings_keypress_allKeys):
                settings_keypress.keys = _settings_keypress_allKeys[-1].name  # just the last key pressed
                settings_keypress.rt = _settings_keypress_allKeys[-1].rt
                settings_keypress.duration = _settings_keypress_allKeys[-1].duration
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer, globalClock], 
                currentRoutine=settings,
            )
            # skip the frame we paused on
            continue
        
        # has a Component requested the Routine to end?
        if not continueRoutine:
            settings.forceEnded = routineForceEnded = True
        # has the Routine been forcibly ended?
        if settings.forceEnded or routineForceEnded:
            break
        # has every Component finished?
        continueRoutine = False
        for thisComponent in settings.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "settings" ---
    for thisComponent in settings.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for settings
    settings.tStop = globalClock.getTime(format='float')
    settings.tStopRefresh = tThisFlipGlobal
    thisExp.addData('settings.stopped', settings.tStop)
    thisExp.nextEntry()
    # the Routine "settings" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # --- Prepare to start Routine "instr" ---
    # create an object to store info about Routine instr
    instr = data.Routine(
        name='instr',
        components=[instr_text, instr_resp],
    )
    instr.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    # create starting attributes for instr_resp
    instr_resp.keys = []
    instr_resp.rt = []
    _instr_resp_allKeys = []
    # store start times for instr
    instr.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    instr.tStart = globalClock.getTime(format='float')
    instr.status = STARTED
    thisExp.addData('instr.started', instr.tStart)
    instr.maxDuration = None
    # keep track of which components have finished
    instrComponents = instr.components
    for thisComponent in instr.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "instr" ---
    thisExp.currentRoutine = instr
    instr.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *instr_text* updates
        
        # if instr_text is starting this frame...
        if instr_text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            instr_text.frameNStart = frameN  # exact frame index
            instr_text.tStart = t  # local t and not account for scr refresh
            instr_text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(instr_text, 'tStartRefresh')  # time at next scr refresh
            # update status
            instr_text.status = STARTED
            instr_text.setAutoDraw(True)
        
        # if instr_text is active this frame...
        if instr_text.status == STARTED:
            # update params
            pass
        
        # *instr_resp* updates
        waitOnFlip = False
        
        # if instr_resp is starting this frame...
        if instr_resp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            instr_resp.frameNStart = frameN  # exact frame index
            instr_resp.tStart = t  # local t and not account for scr refresh
            instr_resp.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(instr_resp, 'tStartRefresh')  # time at next scr refresh
            # update status
            instr_resp.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(instr_resp.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(instr_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if instr_resp.status == STARTED and not waitOnFlip:
            theseKeys = instr_resp.getKeys(keyList=['space'], ignoreKeys=["escape"], waitRelease=False)
            _instr_resp_allKeys.extend(theseKeys)
            if len(_instr_resp_allKeys):
                instr_resp.keys = _instr_resp_allKeys[-1].name  # just the last key pressed
                instr_resp.rt = _instr_resp_allKeys[-1].rt
                instr_resp.duration = _instr_resp_allKeys[-1].duration
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer, globalClock], 
                currentRoutine=instr,
            )
            # skip the frame we paused on
            continue
        
        # has a Component requested the Routine to end?
        if not continueRoutine:
            instr.forceEnded = routineForceEnded = True
        # has the Routine been forcibly ended?
        if instr.forceEnded or routineForceEnded:
            break
        # has every Component finished?
        continueRoutine = False
        for thisComponent in instr.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "instr" ---
    for thisComponent in instr.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for instr
    instr.tStop = globalClock.getTime(format='float')
    instr.tStopRefresh = tThisFlipGlobal
    thisExp.addData('instr.stopped', instr.tStop)
    thisExp.nextEntry()
    # the Routine "instr" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # set up handler to look after randomisation of conditions etc
    training = data.TrialHandler2(
        name='training',
        nReps=1.0, 
        method='random', 
        extraInfo=expInfo, 
        originPath=-1, 
        trialList=data.importConditions('condition_RGB_easylowhard_train.xlsx'), 
        seed=None, 
        isTrials=True, 
    )
    thisExp.addLoop(training)  # add the loop to the experiment
    thisTraining = training.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisTraining.rgb)
    if thisTraining != None:
        for paramName in thisTraining:
            globals()[paramName] = thisTraining[paramName]
    if thisSession is not None:
        # if running in a Session with a Liaison client, send data up to now
        thisSession.sendExperimentData()
    
    for thisTraining in training:
        training.status = STARTED
        if hasattr(thisTraining, 'status'):
            thisTraining.status = STARTED
        currentLoop = training
        thisExp.timestampOnFlip(win, 'thisRow.t', format=globalClock.format)
        if thisSession is not None:
            # if running in a Session with a Liaison client, send data up to now
            thisSession.sendExperimentData()
        # abbreviate parameter names if possible (e.g. rgb = thisTraining.rgb)
        if thisTraining != None:
            for paramName in thisTraining:
                globals()[paramName] = thisTraining[paramName]
        
        # --- Prepare to start Routine "CC_trial" ---
        # create an object to store info about Routine CC_trial
        CC_trial = data.Routine(
            name='CC_trial',
            components=[clr1examp, clr2examp, clr3examp, clr4examp, clr1trial, clr2trail, clr3trail, clr4trail, key_skip, MASKclr1tr, MASKclr2tr, MASKclr3tr, MASKclr4tr],
        )
        CC_trial.status = NOT_STARTED
        continueRoutine = True
        # update component parameters for each repeat
        clr1examp.setFillColor(clr1p1)
        clr2examp.setFillColor(clr2p1)
        clr3examp.setFillColor(clr3p1)
        clr4examp.setFillColor(clr4p1)
        clr1trial.setFillColor(clr1p2)
        clr2trail.setFillColor(clr2p2)
        clr3trail.setFillColor(clr3p2)
        clr4trail.setFillColor(clr4p2)
        # create starting attributes for key_skip
        key_skip.keys = []
        key_skip.rt = []
        _key_skip_allKeys = []
        MASKclr1tr.setFillColor('black')
        MASKclr2tr.setFillColor('black')
        MASKclr3tr.setFillColor('black')
        MASKclr4tr.setFillColor('black')
        # store start times for CC_trial
        CC_trial.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
        CC_trial.tStart = globalClock.getTime(format='float')
        CC_trial.status = STARTED
        thisExp.addData('CC_trial.started', CC_trial.tStart)
        CC_trial.maxDuration = None
        # keep track of which components have finished
        CC_trialComponents = CC_trial.components
        for thisComponent in CC_trial.components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "CC_trial" ---
        thisExp.currentRoutine = CC_trial
        CC_trial.forceEnded = routineForceEnded = not continueRoutine
        while continueRoutine and routineTimer.getTime() < 6.0:
            # if trial has changed, end Routine now
            if hasattr(thisTraining, 'status') and thisTraining.status == STOPPING:
                continueRoutine = False
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *clr1examp* updates
            
            # if clr1examp is starting this frame...
            if clr1examp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                clr1examp.frameNStart = frameN  # exact frame index
                clr1examp.tStart = t  # local t and not account for scr refresh
                clr1examp.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(clr1examp, 'tStartRefresh')  # time at next scr refresh
                # update status
                clr1examp.status = STARTED
                clr1examp.setAutoDraw(True)
            
            # if clr1examp is active this frame...
            if clr1examp.status == STARTED:
                # update params
                pass
            
            # if clr1examp is stopping this frame...
            if clr1examp.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > clr1examp.tStartRefresh + 2.5-frameTolerance:
                    # keep track of stop time/frame for later
                    clr1examp.tStop = t  # not accounting for scr refresh
                    clr1examp.tStopRefresh = tThisFlipGlobal  # on global time
                    clr1examp.frameNStop = frameN  # exact frame index
                    # update status
                    clr1examp.status = FINISHED
                    clr1examp.setAutoDraw(False)
            
            # *clr2examp* updates
            
            # if clr2examp is starting this frame...
            if clr2examp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                clr2examp.frameNStart = frameN  # exact frame index
                clr2examp.tStart = t  # local t and not account for scr refresh
                clr2examp.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(clr2examp, 'tStartRefresh')  # time at next scr refresh
                # update status
                clr2examp.status = STARTED
                clr2examp.setAutoDraw(True)
            
            # if clr2examp is active this frame...
            if clr2examp.status == STARTED:
                # update params
                pass
            
            # if clr2examp is stopping this frame...
            if clr2examp.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > clr2examp.tStartRefresh + 2.5-frameTolerance:
                    # keep track of stop time/frame for later
                    clr2examp.tStop = t  # not accounting for scr refresh
                    clr2examp.tStopRefresh = tThisFlipGlobal  # on global time
                    clr2examp.frameNStop = frameN  # exact frame index
                    # update status
                    clr2examp.status = FINISHED
                    clr2examp.setAutoDraw(False)
            
            # *clr3examp* updates
            
            # if clr3examp is starting this frame...
            if clr3examp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                clr3examp.frameNStart = frameN  # exact frame index
                clr3examp.tStart = t  # local t and not account for scr refresh
                clr3examp.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(clr3examp, 'tStartRefresh')  # time at next scr refresh
                # update status
                clr3examp.status = STARTED
                clr3examp.setAutoDraw(True)
            
            # if clr3examp is active this frame...
            if clr3examp.status == STARTED:
                # update params
                pass
            
            # if clr3examp is stopping this frame...
            if clr3examp.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > clr3examp.tStartRefresh + 2.5-frameTolerance:
                    # keep track of stop time/frame for later
                    clr3examp.tStop = t  # not accounting for scr refresh
                    clr3examp.tStopRefresh = tThisFlipGlobal  # on global time
                    clr3examp.frameNStop = frameN  # exact frame index
                    # update status
                    clr3examp.status = FINISHED
                    clr3examp.setAutoDraw(False)
            
            # *clr4examp* updates
            
            # if clr4examp is starting this frame...
            if clr4examp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                clr4examp.frameNStart = frameN  # exact frame index
                clr4examp.tStart = t  # local t and not account for scr refresh
                clr4examp.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(clr4examp, 'tStartRefresh')  # time at next scr refresh
                # update status
                clr4examp.status = STARTED
                clr4examp.setAutoDraw(True)
            
            # if clr4examp is active this frame...
            if clr4examp.status == STARTED:
                # update params
                pass
            
            # if clr4examp is stopping this frame...
            if clr4examp.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > clr4examp.tStartRefresh + 2.5-frameTolerance:
                    # keep track of stop time/frame for later
                    clr4examp.tStop = t  # not accounting for scr refresh
                    clr4examp.tStopRefresh = tThisFlipGlobal  # on global time
                    clr4examp.frameNStop = frameN  # exact frame index
                    # update status
                    clr4examp.status = FINISHED
                    clr4examp.setAutoDraw(False)
            
            # *clr1trial* updates
            
            # if clr1trial is starting this frame...
            if clr1trial.status == NOT_STARTED and tThisFlip >= 2.5-frameTolerance:
                # keep track of start time/frame for later
                clr1trial.frameNStart = frameN  # exact frame index
                clr1trial.tStart = t  # local t and not account for scr refresh
                clr1trial.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(clr1trial, 'tStartRefresh')  # time at next scr refresh
                # update status
                clr1trial.status = STARTED
                clr1trial.setAutoDraw(True)
            
            # if clr1trial is active this frame...
            if clr1trial.status == STARTED:
                # update params
                pass
            
            # if clr1trial is stopping this frame...
            if clr1trial.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > clr1trial.tStartRefresh + 2.5-frameTolerance:
                    # keep track of stop time/frame for later
                    clr1trial.tStop = t  # not accounting for scr refresh
                    clr1trial.tStopRefresh = tThisFlipGlobal  # on global time
                    clr1trial.frameNStop = frameN  # exact frame index
                    # update status
                    clr1trial.status = FINISHED
                    clr1trial.setAutoDraw(False)
            
            # *clr2trail* updates
            
            # if clr2trail is starting this frame...
            if clr2trail.status == NOT_STARTED and tThisFlip >= 2.5-frameTolerance:
                # keep track of start time/frame for later
                clr2trail.frameNStart = frameN  # exact frame index
                clr2trail.tStart = t  # local t and not account for scr refresh
                clr2trail.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(clr2trail, 'tStartRefresh')  # time at next scr refresh
                # update status
                clr2trail.status = STARTED
                clr2trail.setAutoDraw(True)
            
            # if clr2trail is active this frame...
            if clr2trail.status == STARTED:
                # update params
                pass
            
            # if clr2trail is stopping this frame...
            if clr2trail.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > clr2trail.tStartRefresh + 2.5-frameTolerance:
                    # keep track of stop time/frame for later
                    clr2trail.tStop = t  # not accounting for scr refresh
                    clr2trail.tStopRefresh = tThisFlipGlobal  # on global time
                    clr2trail.frameNStop = frameN  # exact frame index
                    # update status
                    clr2trail.status = FINISHED
                    clr2trail.setAutoDraw(False)
            
            # *clr3trail* updates
            
            # if clr3trail is starting this frame...
            if clr3trail.status == NOT_STARTED and tThisFlip >= 2.5-frameTolerance:
                # keep track of start time/frame for later
                clr3trail.frameNStart = frameN  # exact frame index
                clr3trail.tStart = t  # local t and not account for scr refresh
                clr3trail.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(clr3trail, 'tStartRefresh')  # time at next scr refresh
                # update status
                clr3trail.status = STARTED
                clr3trail.setAutoDraw(True)
            
            # if clr3trail is active this frame...
            if clr3trail.status == STARTED:
                # update params
                pass
            
            # if clr3trail is stopping this frame...
            if clr3trail.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > clr3trail.tStartRefresh + 2.5-frameTolerance:
                    # keep track of stop time/frame for later
                    clr3trail.tStop = t  # not accounting for scr refresh
                    clr3trail.tStopRefresh = tThisFlipGlobal  # on global time
                    clr3trail.frameNStop = frameN  # exact frame index
                    # update status
                    clr3trail.status = FINISHED
                    clr3trail.setAutoDraw(False)
            
            # *clr4trail* updates
            
            # if clr4trail is starting this frame...
            if clr4trail.status == NOT_STARTED and tThisFlip >= 2.5-frameTolerance:
                # keep track of start time/frame for later
                clr4trail.frameNStart = frameN  # exact frame index
                clr4trail.tStart = t  # local t and not account for scr refresh
                clr4trail.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(clr4trail, 'tStartRefresh')  # time at next scr refresh
                # update status
                clr4trail.status = STARTED
                clr4trail.setAutoDraw(True)
            
            # if clr4trail is active this frame...
            if clr4trail.status == STARTED:
                # update params
                pass
            
            # if clr4trail is stopping this frame...
            if clr4trail.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > clr4trail.tStartRefresh + 2.5-frameTolerance:
                    # keep track of stop time/frame for later
                    clr4trail.tStop = t  # not accounting for scr refresh
                    clr4trail.tStopRefresh = tThisFlipGlobal  # on global time
                    clr4trail.frameNStop = frameN  # exact frame index
                    # update status
                    clr4trail.status = FINISHED
                    clr4trail.setAutoDraw(False)
            
            # *key_skip* updates
            waitOnFlip = False
            
            # if key_skip is starting this frame...
            if key_skip.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                key_skip.frameNStart = frameN  # exact frame index
                key_skip.tStart = t  # local t and not account for scr refresh
                key_skip.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(key_skip, 'tStartRefresh')  # time at next scr refresh
                # update status
                key_skip.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(key_skip.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(key_skip.clearEvents, eventType='keyboard')  # clear events on next screen flip
            
            # if key_skip is stopping this frame...
            if key_skip.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > key_skip.tStartRefresh + 6-frameTolerance:
                    # keep track of stop time/frame for later
                    key_skip.tStop = t  # not accounting for scr refresh
                    key_skip.tStopRefresh = tThisFlipGlobal  # on global time
                    key_skip.frameNStop = frameN  # exact frame index
                    # update status
                    key_skip.status = FINISHED
                    key_skip.status = FINISHED
            if key_skip.status == STARTED and not waitOnFlip:
                theseKeys = key_skip.getKeys(keyList=['space'], ignoreKeys=["escape"], waitRelease=False)
                _key_skip_allKeys.extend(theseKeys)
                if len(_key_skip_allKeys):
                    key_skip.keys = _key_skip_allKeys[-1].name  # just the last key pressed
                    key_skip.rt = _key_skip_allKeys[-1].rt
                    key_skip.duration = _key_skip_allKeys[-1].duration
                    # a response ends the routine
                    continueRoutine = False
            
            # *MASKclr1tr* updates
            
            # if MASKclr1tr is starting this frame...
            if MASKclr1tr.status == NOT_STARTED and tThisFlip >= 5-frameTolerance:
                # keep track of start time/frame for later
                MASKclr1tr.frameNStart = frameN  # exact frame index
                MASKclr1tr.tStart = t  # local t and not account for scr refresh
                MASKclr1tr.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(MASKclr1tr, 'tStartRefresh')  # time at next scr refresh
                # update status
                MASKclr1tr.status = STARTED
                MASKclr1tr.setAutoDraw(True)
            
            # if MASKclr1tr is active this frame...
            if MASKclr1tr.status == STARTED:
                # update params
                pass
            
            # if MASKclr1tr is stopping this frame...
            if MASKclr1tr.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > MASKclr1tr.tStartRefresh + 1-frameTolerance:
                    # keep track of stop time/frame for later
                    MASKclr1tr.tStop = t  # not accounting for scr refresh
                    MASKclr1tr.tStopRefresh = tThisFlipGlobal  # on global time
                    MASKclr1tr.frameNStop = frameN  # exact frame index
                    # update status
                    MASKclr1tr.status = FINISHED
                    MASKclr1tr.setAutoDraw(False)
            
            # *MASKclr2tr* updates
            
            # if MASKclr2tr is starting this frame...
            if MASKclr2tr.status == NOT_STARTED and tThisFlip >= 5-frameTolerance:
                # keep track of start time/frame for later
                MASKclr2tr.frameNStart = frameN  # exact frame index
                MASKclr2tr.tStart = t  # local t and not account for scr refresh
                MASKclr2tr.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(MASKclr2tr, 'tStartRefresh')  # time at next scr refresh
                # update status
                MASKclr2tr.status = STARTED
                MASKclr2tr.setAutoDraw(True)
            
            # if MASKclr2tr is active this frame...
            if MASKclr2tr.status == STARTED:
                # update params
                pass
            
            # if MASKclr2tr is stopping this frame...
            if MASKclr2tr.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > MASKclr2tr.tStartRefresh + 1-frameTolerance:
                    # keep track of stop time/frame for later
                    MASKclr2tr.tStop = t  # not accounting for scr refresh
                    MASKclr2tr.tStopRefresh = tThisFlipGlobal  # on global time
                    MASKclr2tr.frameNStop = frameN  # exact frame index
                    # update status
                    MASKclr2tr.status = FINISHED
                    MASKclr2tr.setAutoDraw(False)
            
            # *MASKclr3tr* updates
            
            # if MASKclr3tr is starting this frame...
            if MASKclr3tr.status == NOT_STARTED and tThisFlip >= 5-frameTolerance:
                # keep track of start time/frame for later
                MASKclr3tr.frameNStart = frameN  # exact frame index
                MASKclr3tr.tStart = t  # local t and not account for scr refresh
                MASKclr3tr.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(MASKclr3tr, 'tStartRefresh')  # time at next scr refresh
                # update status
                MASKclr3tr.status = STARTED
                MASKclr3tr.setAutoDraw(True)
            
            # if MASKclr3tr is active this frame...
            if MASKclr3tr.status == STARTED:
                # update params
                pass
            
            # if MASKclr3tr is stopping this frame...
            if MASKclr3tr.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > MASKclr3tr.tStartRefresh + 1-frameTolerance:
                    # keep track of stop time/frame for later
                    MASKclr3tr.tStop = t  # not accounting for scr refresh
                    MASKclr3tr.tStopRefresh = tThisFlipGlobal  # on global time
                    MASKclr3tr.frameNStop = frameN  # exact frame index
                    # update status
                    MASKclr3tr.status = FINISHED
                    MASKclr3tr.setAutoDraw(False)
            
            # *MASKclr4tr* updates
            
            # if MASKclr4tr is starting this frame...
            if MASKclr4tr.status == NOT_STARTED and tThisFlip >= 5-frameTolerance:
                # keep track of start time/frame for later
                MASKclr4tr.frameNStart = frameN  # exact frame index
                MASKclr4tr.tStart = t  # local t and not account for scr refresh
                MASKclr4tr.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(MASKclr4tr, 'tStartRefresh')  # time at next scr refresh
                # update status
                MASKclr4tr.status = STARTED
                MASKclr4tr.setAutoDraw(True)
            
            # if MASKclr4tr is active this frame...
            if MASKclr4tr.status == STARTED:
                # update params
                pass
            
            # if MASKclr4tr is stopping this frame...
            if MASKclr4tr.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > MASKclr4tr.tStartRefresh + 1-frameTolerance:
                    # keep track of stop time/frame for later
                    MASKclr4tr.tStop = t  # not accounting for scr refresh
                    MASKclr4tr.tStopRefresh = tThisFlipGlobal  # on global time
                    MASKclr4tr.frameNStop = frameN  # exact frame index
                    # update status
                    MASKclr4tr.status = FINISHED
                    MASKclr4tr.setAutoDraw(False)
            
            # check for quit (typically the Esc key)
            if defaultKeyboard.getKeys(keyList=["escape"]):
                thisExp.status = FINISHED
            if thisExp.status == FINISHED or endExpNow:
                endExperiment(thisExp, win=win)
                return
            # pause experiment here if requested
            if thisExp.status == PAUSED:
                pauseExperiment(
                    thisExp=thisExp, 
                    win=win, 
                    timers=[routineTimer, globalClock], 
                    currentRoutine=CC_trial,
                )
                # skip the frame we paused on
                continue
            
            # has a Component requested the Routine to end?
            if not continueRoutine:
                CC_trial.forceEnded = routineForceEnded = True
            # has the Routine been forcibly ended?
            if CC_trial.forceEnded or routineForceEnded:
                break
            # has every Component finished?
            continueRoutine = False
            for thisComponent in CC_trial.components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "CC_trial" ---
        for thisComponent in CC_trial.components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # store stop times for CC_trial
        CC_trial.tStop = globalClock.getTime(format='float')
        CC_trial.tStopRefresh = tThisFlipGlobal
        thisExp.addData('CC_trial.stopped', CC_trial.tStop)
        # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
        if CC_trial.maxDurationReached:
            routineTimer.addTime(-CC_trial.maxDuration)
        elif CC_trial.forceEnded:
            routineTimer.reset()
        else:
            routineTimer.addTime(-6.000000)
        
        # --- Prepare to start Routine "blank" ---
        # create an object to store info about Routine blank
        blank = data.Routine(
            name='blank',
            components=[fix],
        )
        blank.status = NOT_STARTED
        continueRoutine = True
        # update component parameters for each repeat
        # store start times for blank
        blank.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
        blank.tStart = globalClock.getTime(format='float')
        blank.status = STARTED
        thisExp.addData('blank.started', blank.tStart)
        blank.maxDuration = None
        # keep track of which components have finished
        blankComponents = blank.components
        for thisComponent in blank.components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "blank" ---
        thisExp.currentRoutine = blank
        blank.forceEnded = routineForceEnded = not continueRoutine
        while continueRoutine and routineTimer.getTime() < 0.5:
            # if trial has changed, end Routine now
            if hasattr(thisTraining, 'status') and thisTraining.status == STOPPING:
                continueRoutine = False
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *fix* updates
            
            # if fix is starting this frame...
            if fix.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                fix.frameNStart = frameN  # exact frame index
                fix.tStart = t  # local t and not account for scr refresh
                fix.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(fix, 'tStartRefresh')  # time at next scr refresh
                # update status
                fix.status = STARTED
                fix.setAutoDraw(True)
            
            # if fix is active this frame...
            if fix.status == STARTED:
                # update params
                pass
            
            # if fix is stopping this frame...
            if fix.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > fix.tStartRefresh + 0.5-frameTolerance:
                    # keep track of stop time/frame for later
                    fix.tStop = t  # not accounting for scr refresh
                    fix.tStopRefresh = tThisFlipGlobal  # on global time
                    fix.frameNStop = frameN  # exact frame index
                    # update status
                    fix.status = FINISHED
                    fix.setAutoDraw(False)
            
            # check for quit (typically the Esc key)
            if defaultKeyboard.getKeys(keyList=["escape"]):
                thisExp.status = FINISHED
            if thisExp.status == FINISHED or endExpNow:
                endExperiment(thisExp, win=win)
                return
            # pause experiment here if requested
            if thisExp.status == PAUSED:
                pauseExperiment(
                    thisExp=thisExp, 
                    win=win, 
                    timers=[routineTimer, globalClock], 
                    currentRoutine=blank,
                )
                # skip the frame we paused on
                continue
            
            # has a Component requested the Routine to end?
            if not continueRoutine:
                blank.forceEnded = routineForceEnded = True
            # has the Routine been forcibly ended?
            if blank.forceEnded or routineForceEnded:
                break
            # has every Component finished?
            continueRoutine = False
            for thisComponent in blank.components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "blank" ---
        for thisComponent in blank.components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # store stop times for blank
        blank.tStop = globalClock.getTime(format='float')
        blank.tStopRefresh = tThisFlipGlobal
        thisExp.addData('blank.stopped', blank.tStop)
        # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
        if blank.maxDurationReached:
            routineTimer.addTime(-blank.maxDuration)
        elif blank.forceEnded:
            routineTimer.reset()
        else:
            routineTimer.addTime(-0.500000)
        
        # --- Prepare to start Routine "CC_trainAnsw" ---
        # create an object to store info about Routine CC_trainAnsw
        CC_trainAnsw = data.Routine(
            name='CC_trainAnsw',
            components=[l_point_2, r_point_2, CC_resp_2, l_hint, r_hint],
        )
        CC_trainAnsw.status = NOT_STARTED
        continueRoutine = True
        # update component parameters for each repeat
        l_point_2.setFillColor(l_test)
        r_point_2.setFillColor(r_test)
        # create starting attributes for CC_resp_2
        CC_resp_2.keys = []
        CC_resp_2.rt = []
        _CC_resp_2_allKeys = []
        # store start times for CC_trainAnsw
        CC_trainAnsw.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
        CC_trainAnsw.tStart = globalClock.getTime(format='float')
        CC_trainAnsw.status = STARTED
        thisExp.addData('CC_trainAnsw.started', CC_trainAnsw.tStart)
        CC_trainAnsw.maxDuration = None
        # keep track of which components have finished
        CC_trainAnswComponents = CC_trainAnsw.components
        for thisComponent in CC_trainAnsw.components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "CC_trainAnsw" ---
        thisExp.currentRoutine = CC_trainAnsw
        CC_trainAnsw.forceEnded = routineForceEnded = not continueRoutine
        while continueRoutine and routineTimer.getTime() < 5.0:
            # if trial has changed, end Routine now
            if hasattr(thisTraining, 'status') and thisTraining.status == STOPPING:
                continueRoutine = False
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *l_point_2* updates
            
            # if l_point_2 is starting this frame...
            if l_point_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                l_point_2.frameNStart = frameN  # exact frame index
                l_point_2.tStart = t  # local t and not account for scr refresh
                l_point_2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(l_point_2, 'tStartRefresh')  # time at next scr refresh
                # update status
                l_point_2.status = STARTED
                l_point_2.setAutoDraw(True)
            
            # if l_point_2 is active this frame...
            if l_point_2.status == STARTED:
                # update params
                pass
            
            # if l_point_2 is stopping this frame...
            if l_point_2.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > l_point_2.tStartRefresh + 5.0-frameTolerance:
                    # keep track of stop time/frame for later
                    l_point_2.tStop = t  # not accounting for scr refresh
                    l_point_2.tStopRefresh = tThisFlipGlobal  # on global time
                    l_point_2.frameNStop = frameN  # exact frame index
                    # update status
                    l_point_2.status = FINISHED
                    l_point_2.setAutoDraw(False)
            
            # *r_point_2* updates
            
            # if r_point_2 is starting this frame...
            if r_point_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                r_point_2.frameNStart = frameN  # exact frame index
                r_point_2.tStart = t  # local t and not account for scr refresh
                r_point_2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(r_point_2, 'tStartRefresh')  # time at next scr refresh
                # update status
                r_point_2.status = STARTED
                r_point_2.setAutoDraw(True)
            
            # if r_point_2 is active this frame...
            if r_point_2.status == STARTED:
                # update params
                pass
            
            # if r_point_2 is stopping this frame...
            if r_point_2.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > r_point_2.tStartRefresh + 5.0-frameTolerance:
                    # keep track of stop time/frame for later
                    r_point_2.tStop = t  # not accounting for scr refresh
                    r_point_2.tStopRefresh = tThisFlipGlobal  # on global time
                    r_point_2.frameNStop = frameN  # exact frame index
                    # update status
                    r_point_2.status = FINISHED
                    r_point_2.setAutoDraw(False)
            
            # *CC_resp_2* updates
            waitOnFlip = False
            
            # if CC_resp_2 is starting this frame...
            if CC_resp_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                CC_resp_2.frameNStart = frameN  # exact frame index
                CC_resp_2.tStart = t  # local t and not account for scr refresh
                CC_resp_2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(CC_resp_2, 'tStartRefresh')  # time at next scr refresh
                # update status
                CC_resp_2.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(CC_resp_2.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(CC_resp_2.clearEvents, eventType='keyboard')  # clear events on next screen flip
            
            # if CC_resp_2 is stopping this frame...
            if CC_resp_2.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > CC_resp_2.tStartRefresh + 5-frameTolerance:
                    # keep track of stop time/frame for later
                    CC_resp_2.tStop = t  # not accounting for scr refresh
                    CC_resp_2.tStopRefresh = tThisFlipGlobal  # on global time
                    CC_resp_2.frameNStop = frameN  # exact frame index
                    # update status
                    CC_resp_2.status = FINISHED
                    CC_resp_2.status = FINISHED
            if CC_resp_2.status == STARTED and not waitOnFlip:
                theseKeys = CC_resp_2.getKeys(keyList=['left','right','space'], ignoreKeys=["escape"], waitRelease=False)
                _CC_resp_2_allKeys.extend(theseKeys)
                if len(_CC_resp_2_allKeys):
                    CC_resp_2.keys = _CC_resp_2_allKeys[-1].name  # just the last key pressed
                    CC_resp_2.rt = _CC_resp_2_allKeys[-1].rt
                    CC_resp_2.duration = _CC_resp_2_allKeys[-1].duration
                    # was this correct?
                    if (CC_resp_2.keys == str(answ)) or (CC_resp_2.keys == answ):
                        CC_resp_2.corr = 1
                    else:
                        CC_resp_2.corr = 0
                    # a response ends the routine
                    continueRoutine = False
            
            # *l_hint* updates
            
            # if l_hint is starting this frame...
            if l_hint.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                l_hint.frameNStart = frameN  # exact frame index
                l_hint.tStart = t  # local t and not account for scr refresh
                l_hint.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(l_hint, 'tStartRefresh')  # time at next scr refresh
                # update status
                l_hint.status = STARTED
                l_hint.setAutoDraw(True)
            
            # if l_hint is active this frame...
            if l_hint.status == STARTED:
                # update params
                pass
            
            # if l_hint is stopping this frame...
            if l_hint.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > l_hint.tStartRefresh + 5-frameTolerance:
                    # keep track of stop time/frame for later
                    l_hint.tStop = t  # not accounting for scr refresh
                    l_hint.tStopRefresh = tThisFlipGlobal  # on global time
                    l_hint.frameNStop = frameN  # exact frame index
                    # update status
                    l_hint.status = FINISHED
                    l_hint.setAutoDraw(False)
            
            # *r_hint* updates
            
            # if r_hint is starting this frame...
            if r_hint.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                r_hint.frameNStart = frameN  # exact frame index
                r_hint.tStart = t  # local t and not account for scr refresh
                r_hint.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(r_hint, 'tStartRefresh')  # time at next scr refresh
                # update status
                r_hint.status = STARTED
                r_hint.setAutoDraw(True)
            
            # if r_hint is active this frame...
            if r_hint.status == STARTED:
                # update params
                pass
            
            # if r_hint is stopping this frame...
            if r_hint.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > r_hint.tStartRefresh + 5-frameTolerance:
                    # keep track of stop time/frame for later
                    r_hint.tStop = t  # not accounting for scr refresh
                    r_hint.tStopRefresh = tThisFlipGlobal  # on global time
                    r_hint.frameNStop = frameN  # exact frame index
                    # update status
                    r_hint.status = FINISHED
                    r_hint.setAutoDraw(False)
            
            # check for quit (typically the Esc key)
            if defaultKeyboard.getKeys(keyList=["escape"]):
                thisExp.status = FINISHED
            if thisExp.status == FINISHED or endExpNow:
                endExperiment(thisExp, win=win)
                return
            # pause experiment here if requested
            if thisExp.status == PAUSED:
                pauseExperiment(
                    thisExp=thisExp, 
                    win=win, 
                    timers=[routineTimer, globalClock], 
                    currentRoutine=CC_trainAnsw,
                )
                # skip the frame we paused on
                continue
            
            # has a Component requested the Routine to end?
            if not continueRoutine:
                CC_trainAnsw.forceEnded = routineForceEnded = True
            # has the Routine been forcibly ended?
            if CC_trainAnsw.forceEnded or routineForceEnded:
                break
            # has every Component finished?
            continueRoutine = False
            for thisComponent in CC_trainAnsw.components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "CC_trainAnsw" ---
        for thisComponent in CC_trainAnsw.components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # store stop times for CC_trainAnsw
        CC_trainAnsw.tStop = globalClock.getTime(format='float')
        CC_trainAnsw.tStopRefresh = tThisFlipGlobal
        thisExp.addData('CC_trainAnsw.stopped', CC_trainAnsw.tStop)
        # check responses
        if CC_resp_2.keys in ['', [], None]:  # No response was made
            CC_resp_2.keys = None
            # was no response the correct answer?!
            if str(answ).lower() == 'none':
               CC_resp_2.corr = 1;  # correct non-response
            else:
               CC_resp_2.corr = 0;  # failed to respond (incorrectly)
        # store data for training (TrialHandler)
        training.addData('CC_resp_2.keys',CC_resp_2.keys)
        training.addData('CC_resp_2.corr', CC_resp_2.corr)
        if CC_resp_2.keys != None:  # we had a response
            training.addData('CC_resp_2.rt', CC_resp_2.rt)
            training.addData('CC_resp_2.duration', CC_resp_2.duration)
        # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
        if CC_trainAnsw.maxDurationReached:
            routineTimer.addTime(-CC_trainAnsw.maxDuration)
        elif CC_trainAnsw.forceEnded:
            routineTimer.reset()
        else:
            routineTimer.addTime(-5.000000)
        
        # --- Prepare to start Routine "FB" ---
        # create an object to store info about Routine FB
        FB = data.Routine(
            name='FB',
            components=[FB_text_2, clractual],
        )
        FB.status = NOT_STARTED
        continueRoutine = True
        # update component parameters for each repeat
        # Run 'Begin Routine' code from FB_code_2
        if not CC_resp_2.keys :
            msg="нет ответа"
        elif CC_resp_2.corr:#stored on last run routine
            msg="Да! Правильный:"
        else:
            msg="Нет! Правильный:"
        
        if not (difficulty == "none") and (CC_resp_2.corr == 1):
            try_corr=try_corr+1
            
        
        FB_text_2.setText(msg)
        clractual.setFillColor(realclr)
        # store start times for FB
        FB.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
        FB.tStart = globalClock.getTime(format='float')
        FB.status = STARTED
        thisExp.addData('FB.started', FB.tStart)
        FB.maxDuration = None
        # keep track of which components have finished
        FBComponents = FB.components
        for thisComponent in FB.components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "FB" ---
        thisExp.currentRoutine = FB
        FB.forceEnded = routineForceEnded = not continueRoutine
        while continueRoutine and routineTimer.getTime() < 1.5:
            # if trial has changed, end Routine now
            if hasattr(thisTraining, 'status') and thisTraining.status == STOPPING:
                continueRoutine = False
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *FB_text_2* updates
            
            # if FB_text_2 is starting this frame...
            if FB_text_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                FB_text_2.frameNStart = frameN  # exact frame index
                FB_text_2.tStart = t  # local t and not account for scr refresh
                FB_text_2.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(FB_text_2, 'tStartRefresh')  # time at next scr refresh
                # update status
                FB_text_2.status = STARTED
                FB_text_2.setAutoDraw(True)
            
            # if FB_text_2 is active this frame...
            if FB_text_2.status == STARTED:
                # update params
                pass
            
            # if FB_text_2 is stopping this frame...
            if FB_text_2.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > FB_text_2.tStartRefresh + 1.5-frameTolerance:
                    # keep track of stop time/frame for later
                    FB_text_2.tStop = t  # not accounting for scr refresh
                    FB_text_2.tStopRefresh = tThisFlipGlobal  # on global time
                    FB_text_2.frameNStop = frameN  # exact frame index
                    # update status
                    FB_text_2.status = FINISHED
                    FB_text_2.setAutoDraw(False)
            
            # *clractual* updates
            
            # if clractual is starting this frame...
            if clractual.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
                # keep track of start time/frame for later
                clractual.frameNStart = frameN  # exact frame index
                clractual.tStart = t  # local t and not account for scr refresh
                clractual.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(clractual, 'tStartRefresh')  # time at next scr refresh
                # update status
                clractual.status = STARTED
                clractual.setAutoDraw(True)
            
            # if clractual is active this frame...
            if clractual.status == STARTED:
                # update params
                pass
            
            # if clractual is stopping this frame...
            if clractual.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > clractual.tStartRefresh + 1.5-frameTolerance:
                    # keep track of stop time/frame for later
                    clractual.tStop = t  # not accounting for scr refresh
                    clractual.tStopRefresh = tThisFlipGlobal  # on global time
                    clractual.frameNStop = frameN  # exact frame index
                    # update status
                    clractual.status = FINISHED
                    clractual.setAutoDraw(False)
            
            # check for quit (typically the Esc key)
            if defaultKeyboard.getKeys(keyList=["escape"]):
                thisExp.status = FINISHED
            if thisExp.status == FINISHED or endExpNow:
                endExperiment(thisExp, win=win)
                return
            # pause experiment here if requested
            if thisExp.status == PAUSED:
                pauseExperiment(
                    thisExp=thisExp, 
                    win=win, 
                    timers=[routineTimer, globalClock], 
                    currentRoutine=FB,
                )
                # skip the frame we paused on
                continue
            
            # has a Component requested the Routine to end?
            if not continueRoutine:
                FB.forceEnded = routineForceEnded = True
            # has the Routine been forcibly ended?
            if FB.forceEnded or routineForceEnded:
                break
            # has every Component finished?
            continueRoutine = False
            for thisComponent in FB.components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "FB" ---
        for thisComponent in FB.components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # store stop times for FB
        FB.tStop = globalClock.getTime(format='float')
        FB.tStopRefresh = tThisFlipGlobal
        thisExp.addData('FB.stopped', FB.tStop)
        # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
        if FB.maxDurationReached:
            routineTimer.addTime(-FB.maxDuration)
        elif FB.forceEnded:
            routineTimer.reset()
        else:
            routineTimer.addTime(-1.500000)
        
        # --- Prepare to start Routine "blank" ---
        # create an object to store info about Routine blank
        blank = data.Routine(
            name='blank',
            components=[fix],
        )
        blank.status = NOT_STARTED
        continueRoutine = True
        # update component parameters for each repeat
        # store start times for blank
        blank.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
        blank.tStart = globalClock.getTime(format='float')
        blank.status = STARTED
        thisExp.addData('blank.started', blank.tStart)
        blank.maxDuration = None
        # keep track of which components have finished
        blankComponents = blank.components
        for thisComponent in blank.components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "blank" ---
        thisExp.currentRoutine = blank
        blank.forceEnded = routineForceEnded = not continueRoutine
        while continueRoutine and routineTimer.getTime() < 0.5:
            # if trial has changed, end Routine now
            if hasattr(thisTraining, 'status') and thisTraining.status == STOPPING:
                continueRoutine = False
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *fix* updates
            
            # if fix is starting this frame...
            if fix.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                fix.frameNStart = frameN  # exact frame index
                fix.tStart = t  # local t and not account for scr refresh
                fix.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(fix, 'tStartRefresh')  # time at next scr refresh
                # update status
                fix.status = STARTED
                fix.setAutoDraw(True)
            
            # if fix is active this frame...
            if fix.status == STARTED:
                # update params
                pass
            
            # if fix is stopping this frame...
            if fix.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > fix.tStartRefresh + 0.5-frameTolerance:
                    # keep track of stop time/frame for later
                    fix.tStop = t  # not accounting for scr refresh
                    fix.tStopRefresh = tThisFlipGlobal  # on global time
                    fix.frameNStop = frameN  # exact frame index
                    # update status
                    fix.status = FINISHED
                    fix.setAutoDraw(False)
            
            # check for quit (typically the Esc key)
            if defaultKeyboard.getKeys(keyList=["escape"]):
                thisExp.status = FINISHED
            if thisExp.status == FINISHED or endExpNow:
                endExperiment(thisExp, win=win)
                return
            # pause experiment here if requested
            if thisExp.status == PAUSED:
                pauseExperiment(
                    thisExp=thisExp, 
                    win=win, 
                    timers=[routineTimer, globalClock], 
                    currentRoutine=blank,
                )
                # skip the frame we paused on
                continue
            
            # has a Component requested the Routine to end?
            if not continueRoutine:
                blank.forceEnded = routineForceEnded = True
            # has the Routine been forcibly ended?
            if blank.forceEnded or routineForceEnded:
                break
            # has every Component finished?
            continueRoutine = False
            for thisComponent in blank.components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "blank" ---
        for thisComponent in blank.components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # store stop times for blank
        blank.tStop = globalClock.getTime(format='float')
        blank.tStopRefresh = tThisFlipGlobal
        thisExp.addData('blank.stopped', blank.tStop)
        # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
        if blank.maxDurationReached:
            routineTimer.addTime(-blank.maxDuration)
        elif blank.forceEnded:
            routineTimer.reset()
        else:
            routineTimer.addTime(-0.500000)
        # mark thisTraining as finished
        if hasattr(thisTraining, 'status'):
            thisTraining.status = FINISHED
        # if awaiting a pause, pause now
        if training.status == PAUSED:
            thisExp.status = PAUSED
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[globalClock], 
            )
            # once done pausing, restore running status
            training.status = STARTED
        thisExp.nextEntry()
        
    # completed 1.0 repeats of 'training'
    training.status = FINISHED
    
    if thisSession is not None:
        # if running in a Session with a Liaison client, send data up to now
        thisSession.sendExperimentData()
    
    # --- Prepare to start Routine "instr2" ---
    # create an object to store info about Routine instr2
    instr2 = data.Routine(
        name='instr2',
        components=[text, key_resp],
    )
    instr2.status = NOT_STARTED
    continueRoutine = True
    # update component parameters for each repeat
    # Run 'Begin Routine' code from correct_FB
    final_corr = try_corr / 8
    if final_corr > 0.5:
        train_txt = "Тренировка окончена. С этого момента начинаются задачи основного этапа. Вам не будет даваться обратная связь по правильности ответа, и подказок о клавишах не будет. С этого момента и до конца исследования, пожалуйста, не отвлекайтесь от задач. Когда будете готовы, нажмите ПРОБЕЛ."
    else:
        train_txt = "Тренировка окончена. К сожалению, вы ответили менее чем на 50% контрольных задач, и поэтому не допускаетесь на следующий этап. Пожалуйста, закройте эксперимент кнопкой Esc. Ваши данные не будут потеряны. Спасибо за ваше время!"
    # create starting attributes for key_resp
    key_resp.keys = []
    key_resp.rt = []
    _key_resp_allKeys = []
    # store start times for instr2
    instr2.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
    instr2.tStart = globalClock.getTime(format='float')
    instr2.status = STARTED
    thisExp.addData('instr2.started', instr2.tStart)
    instr2.maxDuration = None
    # keep track of which components have finished
    instr2Components = instr2.components
    for thisComponent in instr2.components:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    frameN = -1
    
    # --- Run Routine "instr2" ---
    thisExp.currentRoutine = instr2
    instr2.forceEnded = routineForceEnded = not continueRoutine
    while continueRoutine:
        # get current time
        t = routineTimer.getTime()
        tThisFlip = win.getFutureFlipTime(clock=routineTimer)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text* updates
        
        # if text is starting this frame...
        if text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            text.frameNStart = frameN  # exact frame index
            text.tStart = t  # local t and not account for scr refresh
            text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text, 'tStartRefresh')  # time at next scr refresh
            # update status
            text.status = STARTED
            text.setAutoDraw(True)
        
        # if text is active this frame...
        if text.status == STARTED:
            # update params
            text.setText(train_txt, log=False)
        
        # *key_resp* updates
        waitOnFlip = False
        
        # if key_resp is starting this frame...
        if key_resp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp.frameNStart = frameN  # exact frame index
            key_resp.tStart = t  # local t and not account for scr refresh
            key_resp.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp, 'tStartRefresh')  # time at next scr refresh
            # update status
            key_resp.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp.status == STARTED and not waitOnFlip:
            theseKeys = key_resp.getKeys(keyList=['enter', 'space'], ignoreKeys=["escape"], waitRelease=False)
            _key_resp_allKeys.extend(theseKeys)
            if len(_key_resp_allKeys):
                key_resp.keys = _key_resp_allKeys[-1].name  # just the last key pressed
                key_resp.rt = _key_resp_allKeys[-1].rt
                key_resp.duration = _key_resp_allKeys[-1].duration
                # a response ends the routine
                continueRoutine = False
        
        # check for quit (typically the Esc key)
        if defaultKeyboard.getKeys(keyList=["escape"]):
            thisExp.status = FINISHED
        if thisExp.status == FINISHED or endExpNow:
            endExperiment(thisExp, win=win)
            return
        # pause experiment here if requested
        if thisExp.status == PAUSED:
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[routineTimer, globalClock], 
                currentRoutine=instr2,
            )
            # skip the frame we paused on
            continue
        
        # has a Component requested the Routine to end?
        if not continueRoutine:
            instr2.forceEnded = routineForceEnded = True
        # has the Routine been forcibly ended?
        if instr2.forceEnded or routineForceEnded:
            break
        # has every Component finished?
        continueRoutine = False
        for thisComponent in instr2.components:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # --- Ending Routine "instr2" ---
    for thisComponent in instr2.components:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store stop times for instr2
    instr2.tStop = globalClock.getTime(format='float')
    instr2.tStopRefresh = tThisFlipGlobal
    thisExp.addData('instr2.stopped', instr2.tStop)
    thisExp.nextEntry()
    # the Routine "instr2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # set up handler to look after randomisation of conditions etc
    stage = data.TrialHandler2(
        name='stage',
        nReps=1.0, 
        method='random', 
        extraInfo=expInfo, 
        originPath=-1, 
        trialList=data.importConditions('condition_RGB_easylowhard_general.xlsx'), 
        seed=None, 
        isTrials=True, 
    )
    thisExp.addLoop(stage)  # add the loop to the experiment
    thisStage = stage.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisStage.rgb)
    if thisStage != None:
        for paramName in thisStage:
            globals()[paramName] = thisStage[paramName]
    if thisSession is not None:
        # if running in a Session with a Liaison client, send data up to now
        thisSession.sendExperimentData()
    
    for thisStage in stage:
        stage.status = STARTED
        if hasattr(thisStage, 'status'):
            thisStage.status = STARTED
        currentLoop = stage
        thisExp.timestampOnFlip(win, 'thisRow.t', format=globalClock.format)
        if thisSession is not None:
            # if running in a Session with a Liaison client, send data up to now
            thisSession.sendExperimentData()
        # abbreviate parameter names if possible (e.g. rgb = thisStage.rgb)
        if thisStage != None:
            for paramName in thisStage:
                globals()[paramName] = thisStage[paramName]
        
        # --- Prepare to start Routine "CC_trial" ---
        # create an object to store info about Routine CC_trial
        CC_trial = data.Routine(
            name='CC_trial',
            components=[clr1examp, clr2examp, clr3examp, clr4examp, clr1trial, clr2trail, clr3trail, clr4trail, key_skip, MASKclr1tr, MASKclr2tr, MASKclr3tr, MASKclr4tr],
        )
        CC_trial.status = NOT_STARTED
        continueRoutine = True
        # update component parameters for each repeat
        clr1examp.setFillColor(clr1p1)
        clr2examp.setFillColor(clr2p1)
        clr3examp.setFillColor(clr3p1)
        clr4examp.setFillColor(clr4p1)
        clr1trial.setFillColor(clr1p2)
        clr2trail.setFillColor(clr2p2)
        clr3trail.setFillColor(clr3p2)
        clr4trail.setFillColor(clr4p2)
        # create starting attributes for key_skip
        key_skip.keys = []
        key_skip.rt = []
        _key_skip_allKeys = []
        MASKclr1tr.setFillColor('black')
        MASKclr2tr.setFillColor('black')
        MASKclr3tr.setFillColor('black')
        MASKclr4tr.setFillColor('black')
        # store start times for CC_trial
        CC_trial.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
        CC_trial.tStart = globalClock.getTime(format='float')
        CC_trial.status = STARTED
        thisExp.addData('CC_trial.started', CC_trial.tStart)
        CC_trial.maxDuration = None
        # keep track of which components have finished
        CC_trialComponents = CC_trial.components
        for thisComponent in CC_trial.components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "CC_trial" ---
        thisExp.currentRoutine = CC_trial
        CC_trial.forceEnded = routineForceEnded = not continueRoutine
        while continueRoutine and routineTimer.getTime() < 6.0:
            # if trial has changed, end Routine now
            if hasattr(thisStage, 'status') and thisStage.status == STOPPING:
                continueRoutine = False
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *clr1examp* updates
            
            # if clr1examp is starting this frame...
            if clr1examp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                clr1examp.frameNStart = frameN  # exact frame index
                clr1examp.tStart = t  # local t and not account for scr refresh
                clr1examp.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(clr1examp, 'tStartRefresh')  # time at next scr refresh
                # update status
                clr1examp.status = STARTED
                clr1examp.setAutoDraw(True)
            
            # if clr1examp is active this frame...
            if clr1examp.status == STARTED:
                # update params
                pass
            
            # if clr1examp is stopping this frame...
            if clr1examp.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > clr1examp.tStartRefresh + 2.5-frameTolerance:
                    # keep track of stop time/frame for later
                    clr1examp.tStop = t  # not accounting for scr refresh
                    clr1examp.tStopRefresh = tThisFlipGlobal  # on global time
                    clr1examp.frameNStop = frameN  # exact frame index
                    # update status
                    clr1examp.status = FINISHED
                    clr1examp.setAutoDraw(False)
            
            # *clr2examp* updates
            
            # if clr2examp is starting this frame...
            if clr2examp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                clr2examp.frameNStart = frameN  # exact frame index
                clr2examp.tStart = t  # local t and not account for scr refresh
                clr2examp.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(clr2examp, 'tStartRefresh')  # time at next scr refresh
                # update status
                clr2examp.status = STARTED
                clr2examp.setAutoDraw(True)
            
            # if clr2examp is active this frame...
            if clr2examp.status == STARTED:
                # update params
                pass
            
            # if clr2examp is stopping this frame...
            if clr2examp.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > clr2examp.tStartRefresh + 2.5-frameTolerance:
                    # keep track of stop time/frame for later
                    clr2examp.tStop = t  # not accounting for scr refresh
                    clr2examp.tStopRefresh = tThisFlipGlobal  # on global time
                    clr2examp.frameNStop = frameN  # exact frame index
                    # update status
                    clr2examp.status = FINISHED
                    clr2examp.setAutoDraw(False)
            
            # *clr3examp* updates
            
            # if clr3examp is starting this frame...
            if clr3examp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                clr3examp.frameNStart = frameN  # exact frame index
                clr3examp.tStart = t  # local t and not account for scr refresh
                clr3examp.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(clr3examp, 'tStartRefresh')  # time at next scr refresh
                # update status
                clr3examp.status = STARTED
                clr3examp.setAutoDraw(True)
            
            # if clr3examp is active this frame...
            if clr3examp.status == STARTED:
                # update params
                pass
            
            # if clr3examp is stopping this frame...
            if clr3examp.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > clr3examp.tStartRefresh + 2.5-frameTolerance:
                    # keep track of stop time/frame for later
                    clr3examp.tStop = t  # not accounting for scr refresh
                    clr3examp.tStopRefresh = tThisFlipGlobal  # on global time
                    clr3examp.frameNStop = frameN  # exact frame index
                    # update status
                    clr3examp.status = FINISHED
                    clr3examp.setAutoDraw(False)
            
            # *clr4examp* updates
            
            # if clr4examp is starting this frame...
            if clr4examp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                clr4examp.frameNStart = frameN  # exact frame index
                clr4examp.tStart = t  # local t and not account for scr refresh
                clr4examp.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(clr4examp, 'tStartRefresh')  # time at next scr refresh
                # update status
                clr4examp.status = STARTED
                clr4examp.setAutoDraw(True)
            
            # if clr4examp is active this frame...
            if clr4examp.status == STARTED:
                # update params
                pass
            
            # if clr4examp is stopping this frame...
            if clr4examp.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > clr4examp.tStartRefresh + 2.5-frameTolerance:
                    # keep track of stop time/frame for later
                    clr4examp.tStop = t  # not accounting for scr refresh
                    clr4examp.tStopRefresh = tThisFlipGlobal  # on global time
                    clr4examp.frameNStop = frameN  # exact frame index
                    # update status
                    clr4examp.status = FINISHED
                    clr4examp.setAutoDraw(False)
            
            # *clr1trial* updates
            
            # if clr1trial is starting this frame...
            if clr1trial.status == NOT_STARTED and tThisFlip >= 2.5-frameTolerance:
                # keep track of start time/frame for later
                clr1trial.frameNStart = frameN  # exact frame index
                clr1trial.tStart = t  # local t and not account for scr refresh
                clr1trial.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(clr1trial, 'tStartRefresh')  # time at next scr refresh
                # update status
                clr1trial.status = STARTED
                clr1trial.setAutoDraw(True)
            
            # if clr1trial is active this frame...
            if clr1trial.status == STARTED:
                # update params
                pass
            
            # if clr1trial is stopping this frame...
            if clr1trial.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > clr1trial.tStartRefresh + 2.5-frameTolerance:
                    # keep track of stop time/frame for later
                    clr1trial.tStop = t  # not accounting for scr refresh
                    clr1trial.tStopRefresh = tThisFlipGlobal  # on global time
                    clr1trial.frameNStop = frameN  # exact frame index
                    # update status
                    clr1trial.status = FINISHED
                    clr1trial.setAutoDraw(False)
            
            # *clr2trail* updates
            
            # if clr2trail is starting this frame...
            if clr2trail.status == NOT_STARTED and tThisFlip >= 2.5-frameTolerance:
                # keep track of start time/frame for later
                clr2trail.frameNStart = frameN  # exact frame index
                clr2trail.tStart = t  # local t and not account for scr refresh
                clr2trail.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(clr2trail, 'tStartRefresh')  # time at next scr refresh
                # update status
                clr2trail.status = STARTED
                clr2trail.setAutoDraw(True)
            
            # if clr2trail is active this frame...
            if clr2trail.status == STARTED:
                # update params
                pass
            
            # if clr2trail is stopping this frame...
            if clr2trail.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > clr2trail.tStartRefresh + 2.5-frameTolerance:
                    # keep track of stop time/frame for later
                    clr2trail.tStop = t  # not accounting for scr refresh
                    clr2trail.tStopRefresh = tThisFlipGlobal  # on global time
                    clr2trail.frameNStop = frameN  # exact frame index
                    # update status
                    clr2trail.status = FINISHED
                    clr2trail.setAutoDraw(False)
            
            # *clr3trail* updates
            
            # if clr3trail is starting this frame...
            if clr3trail.status == NOT_STARTED and tThisFlip >= 2.5-frameTolerance:
                # keep track of start time/frame for later
                clr3trail.frameNStart = frameN  # exact frame index
                clr3trail.tStart = t  # local t and not account for scr refresh
                clr3trail.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(clr3trail, 'tStartRefresh')  # time at next scr refresh
                # update status
                clr3trail.status = STARTED
                clr3trail.setAutoDraw(True)
            
            # if clr3trail is active this frame...
            if clr3trail.status == STARTED:
                # update params
                pass
            
            # if clr3trail is stopping this frame...
            if clr3trail.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > clr3trail.tStartRefresh + 2.5-frameTolerance:
                    # keep track of stop time/frame for later
                    clr3trail.tStop = t  # not accounting for scr refresh
                    clr3trail.tStopRefresh = tThisFlipGlobal  # on global time
                    clr3trail.frameNStop = frameN  # exact frame index
                    # update status
                    clr3trail.status = FINISHED
                    clr3trail.setAutoDraw(False)
            
            # *clr4trail* updates
            
            # if clr4trail is starting this frame...
            if clr4trail.status == NOT_STARTED and tThisFlip >= 2.5-frameTolerance:
                # keep track of start time/frame for later
                clr4trail.frameNStart = frameN  # exact frame index
                clr4trail.tStart = t  # local t and not account for scr refresh
                clr4trail.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(clr4trail, 'tStartRefresh')  # time at next scr refresh
                # update status
                clr4trail.status = STARTED
                clr4trail.setAutoDraw(True)
            
            # if clr4trail is active this frame...
            if clr4trail.status == STARTED:
                # update params
                pass
            
            # if clr4trail is stopping this frame...
            if clr4trail.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > clr4trail.tStartRefresh + 2.5-frameTolerance:
                    # keep track of stop time/frame for later
                    clr4trail.tStop = t  # not accounting for scr refresh
                    clr4trail.tStopRefresh = tThisFlipGlobal  # on global time
                    clr4trail.frameNStop = frameN  # exact frame index
                    # update status
                    clr4trail.status = FINISHED
                    clr4trail.setAutoDraw(False)
            
            # *key_skip* updates
            waitOnFlip = False
            
            # if key_skip is starting this frame...
            if key_skip.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                key_skip.frameNStart = frameN  # exact frame index
                key_skip.tStart = t  # local t and not account for scr refresh
                key_skip.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(key_skip, 'tStartRefresh')  # time at next scr refresh
                # update status
                key_skip.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(key_skip.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(key_skip.clearEvents, eventType='keyboard')  # clear events on next screen flip
            
            # if key_skip is stopping this frame...
            if key_skip.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > key_skip.tStartRefresh + 6-frameTolerance:
                    # keep track of stop time/frame for later
                    key_skip.tStop = t  # not accounting for scr refresh
                    key_skip.tStopRefresh = tThisFlipGlobal  # on global time
                    key_skip.frameNStop = frameN  # exact frame index
                    # update status
                    key_skip.status = FINISHED
                    key_skip.status = FINISHED
            if key_skip.status == STARTED and not waitOnFlip:
                theseKeys = key_skip.getKeys(keyList=['space'], ignoreKeys=["escape"], waitRelease=False)
                _key_skip_allKeys.extend(theseKeys)
                if len(_key_skip_allKeys):
                    key_skip.keys = _key_skip_allKeys[-1].name  # just the last key pressed
                    key_skip.rt = _key_skip_allKeys[-1].rt
                    key_skip.duration = _key_skip_allKeys[-1].duration
                    # a response ends the routine
                    continueRoutine = False
            
            # *MASKclr1tr* updates
            
            # if MASKclr1tr is starting this frame...
            if MASKclr1tr.status == NOT_STARTED and tThisFlip >= 5-frameTolerance:
                # keep track of start time/frame for later
                MASKclr1tr.frameNStart = frameN  # exact frame index
                MASKclr1tr.tStart = t  # local t and not account for scr refresh
                MASKclr1tr.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(MASKclr1tr, 'tStartRefresh')  # time at next scr refresh
                # update status
                MASKclr1tr.status = STARTED
                MASKclr1tr.setAutoDraw(True)
            
            # if MASKclr1tr is active this frame...
            if MASKclr1tr.status == STARTED:
                # update params
                pass
            
            # if MASKclr1tr is stopping this frame...
            if MASKclr1tr.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > MASKclr1tr.tStartRefresh + 1-frameTolerance:
                    # keep track of stop time/frame for later
                    MASKclr1tr.tStop = t  # not accounting for scr refresh
                    MASKclr1tr.tStopRefresh = tThisFlipGlobal  # on global time
                    MASKclr1tr.frameNStop = frameN  # exact frame index
                    # update status
                    MASKclr1tr.status = FINISHED
                    MASKclr1tr.setAutoDraw(False)
            
            # *MASKclr2tr* updates
            
            # if MASKclr2tr is starting this frame...
            if MASKclr2tr.status == NOT_STARTED and tThisFlip >= 5-frameTolerance:
                # keep track of start time/frame for later
                MASKclr2tr.frameNStart = frameN  # exact frame index
                MASKclr2tr.tStart = t  # local t and not account for scr refresh
                MASKclr2tr.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(MASKclr2tr, 'tStartRefresh')  # time at next scr refresh
                # update status
                MASKclr2tr.status = STARTED
                MASKclr2tr.setAutoDraw(True)
            
            # if MASKclr2tr is active this frame...
            if MASKclr2tr.status == STARTED:
                # update params
                pass
            
            # if MASKclr2tr is stopping this frame...
            if MASKclr2tr.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > MASKclr2tr.tStartRefresh + 1-frameTolerance:
                    # keep track of stop time/frame for later
                    MASKclr2tr.tStop = t  # not accounting for scr refresh
                    MASKclr2tr.tStopRefresh = tThisFlipGlobal  # on global time
                    MASKclr2tr.frameNStop = frameN  # exact frame index
                    # update status
                    MASKclr2tr.status = FINISHED
                    MASKclr2tr.setAutoDraw(False)
            
            # *MASKclr3tr* updates
            
            # if MASKclr3tr is starting this frame...
            if MASKclr3tr.status == NOT_STARTED and tThisFlip >= 5-frameTolerance:
                # keep track of start time/frame for later
                MASKclr3tr.frameNStart = frameN  # exact frame index
                MASKclr3tr.tStart = t  # local t and not account for scr refresh
                MASKclr3tr.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(MASKclr3tr, 'tStartRefresh')  # time at next scr refresh
                # update status
                MASKclr3tr.status = STARTED
                MASKclr3tr.setAutoDraw(True)
            
            # if MASKclr3tr is active this frame...
            if MASKclr3tr.status == STARTED:
                # update params
                pass
            
            # if MASKclr3tr is stopping this frame...
            if MASKclr3tr.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > MASKclr3tr.tStartRefresh + 1-frameTolerance:
                    # keep track of stop time/frame for later
                    MASKclr3tr.tStop = t  # not accounting for scr refresh
                    MASKclr3tr.tStopRefresh = tThisFlipGlobal  # on global time
                    MASKclr3tr.frameNStop = frameN  # exact frame index
                    # update status
                    MASKclr3tr.status = FINISHED
                    MASKclr3tr.setAutoDraw(False)
            
            # *MASKclr4tr* updates
            
            # if MASKclr4tr is starting this frame...
            if MASKclr4tr.status == NOT_STARTED and tThisFlip >= 5-frameTolerance:
                # keep track of start time/frame for later
                MASKclr4tr.frameNStart = frameN  # exact frame index
                MASKclr4tr.tStart = t  # local t and not account for scr refresh
                MASKclr4tr.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(MASKclr4tr, 'tStartRefresh')  # time at next scr refresh
                # update status
                MASKclr4tr.status = STARTED
                MASKclr4tr.setAutoDraw(True)
            
            # if MASKclr4tr is active this frame...
            if MASKclr4tr.status == STARTED:
                # update params
                pass
            
            # if MASKclr4tr is stopping this frame...
            if MASKclr4tr.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > MASKclr4tr.tStartRefresh + 1-frameTolerance:
                    # keep track of stop time/frame for later
                    MASKclr4tr.tStop = t  # not accounting for scr refresh
                    MASKclr4tr.tStopRefresh = tThisFlipGlobal  # on global time
                    MASKclr4tr.frameNStop = frameN  # exact frame index
                    # update status
                    MASKclr4tr.status = FINISHED
                    MASKclr4tr.setAutoDraw(False)
            
            # check for quit (typically the Esc key)
            if defaultKeyboard.getKeys(keyList=["escape"]):
                thisExp.status = FINISHED
            if thisExp.status == FINISHED or endExpNow:
                endExperiment(thisExp, win=win)
                return
            # pause experiment here if requested
            if thisExp.status == PAUSED:
                pauseExperiment(
                    thisExp=thisExp, 
                    win=win, 
                    timers=[routineTimer, globalClock], 
                    currentRoutine=CC_trial,
                )
                # skip the frame we paused on
                continue
            
            # has a Component requested the Routine to end?
            if not continueRoutine:
                CC_trial.forceEnded = routineForceEnded = True
            # has the Routine been forcibly ended?
            if CC_trial.forceEnded or routineForceEnded:
                break
            # has every Component finished?
            continueRoutine = False
            for thisComponent in CC_trial.components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "CC_trial" ---
        for thisComponent in CC_trial.components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # store stop times for CC_trial
        CC_trial.tStop = globalClock.getTime(format='float')
        CC_trial.tStopRefresh = tThisFlipGlobal
        thisExp.addData('CC_trial.stopped', CC_trial.tStop)
        # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
        if CC_trial.maxDurationReached:
            routineTimer.addTime(-CC_trial.maxDuration)
        elif CC_trial.forceEnded:
            routineTimer.reset()
        else:
            routineTimer.addTime(-6.000000)
        
        # --- Prepare to start Routine "blank" ---
        # create an object to store info about Routine blank
        blank = data.Routine(
            name='blank',
            components=[fix],
        )
        blank.status = NOT_STARTED
        continueRoutine = True
        # update component parameters for each repeat
        # store start times for blank
        blank.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
        blank.tStart = globalClock.getTime(format='float')
        blank.status = STARTED
        thisExp.addData('blank.started', blank.tStart)
        blank.maxDuration = None
        # keep track of which components have finished
        blankComponents = blank.components
        for thisComponent in blank.components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "blank" ---
        thisExp.currentRoutine = blank
        blank.forceEnded = routineForceEnded = not continueRoutine
        while continueRoutine and routineTimer.getTime() < 0.5:
            # if trial has changed, end Routine now
            if hasattr(thisStage, 'status') and thisStage.status == STOPPING:
                continueRoutine = False
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *fix* updates
            
            # if fix is starting this frame...
            if fix.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                fix.frameNStart = frameN  # exact frame index
                fix.tStart = t  # local t and not account for scr refresh
                fix.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(fix, 'tStartRefresh')  # time at next scr refresh
                # update status
                fix.status = STARTED
                fix.setAutoDraw(True)
            
            # if fix is active this frame...
            if fix.status == STARTED:
                # update params
                pass
            
            # if fix is stopping this frame...
            if fix.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > fix.tStartRefresh + 0.5-frameTolerance:
                    # keep track of stop time/frame for later
                    fix.tStop = t  # not accounting for scr refresh
                    fix.tStopRefresh = tThisFlipGlobal  # on global time
                    fix.frameNStop = frameN  # exact frame index
                    # update status
                    fix.status = FINISHED
                    fix.setAutoDraw(False)
            
            # check for quit (typically the Esc key)
            if defaultKeyboard.getKeys(keyList=["escape"]):
                thisExp.status = FINISHED
            if thisExp.status == FINISHED or endExpNow:
                endExperiment(thisExp, win=win)
                return
            # pause experiment here if requested
            if thisExp.status == PAUSED:
                pauseExperiment(
                    thisExp=thisExp, 
                    win=win, 
                    timers=[routineTimer, globalClock], 
                    currentRoutine=blank,
                )
                # skip the frame we paused on
                continue
            
            # has a Component requested the Routine to end?
            if not continueRoutine:
                blank.forceEnded = routineForceEnded = True
            # has the Routine been forcibly ended?
            if blank.forceEnded or routineForceEnded:
                break
            # has every Component finished?
            continueRoutine = False
            for thisComponent in blank.components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "blank" ---
        for thisComponent in blank.components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # store stop times for blank
        blank.tStop = globalClock.getTime(format='float')
        blank.tStopRefresh = tThisFlipGlobal
        thisExp.addData('blank.stopped', blank.tStop)
        # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
        if blank.maxDurationReached:
            routineTimer.addTime(-blank.maxDuration)
        elif blank.forceEnded:
            routineTimer.reset()
        else:
            routineTimer.addTime(-0.500000)
        
        # --- Prepare to start Routine "CC_answer" ---
        # create an object to store info about Routine CC_answer
        CC_answer = data.Routine(
            name='CC_answer',
            components=[l_point, r_point, CC_resp],
        )
        CC_answer.status = NOT_STARTED
        continueRoutine = True
        # update component parameters for each repeat
        l_point.setFillColor(l_test)
        r_point.setFillColor(r_test)
        # create starting attributes for CC_resp
        CC_resp.keys = []
        CC_resp.rt = []
        _CC_resp_allKeys = []
        # store start times for CC_answer
        CC_answer.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
        CC_answer.tStart = globalClock.getTime(format='float')
        CC_answer.status = STARTED
        thisExp.addData('CC_answer.started', CC_answer.tStart)
        CC_answer.maxDuration = None
        # keep track of which components have finished
        CC_answerComponents = CC_answer.components
        for thisComponent in CC_answer.components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "CC_answer" ---
        thisExp.currentRoutine = CC_answer
        CC_answer.forceEnded = routineForceEnded = not continueRoutine
        while continueRoutine and routineTimer.getTime() < 5.0:
            # if trial has changed, end Routine now
            if hasattr(thisStage, 'status') and thisStage.status == STOPPING:
                continueRoutine = False
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *l_point* updates
            
            # if l_point is starting this frame...
            if l_point.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                l_point.frameNStart = frameN  # exact frame index
                l_point.tStart = t  # local t and not account for scr refresh
                l_point.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(l_point, 'tStartRefresh')  # time at next scr refresh
                # update status
                l_point.status = STARTED
                l_point.setAutoDraw(True)
            
            # if l_point is active this frame...
            if l_point.status == STARTED:
                # update params
                pass
            
            # if l_point is stopping this frame...
            if l_point.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > l_point.tStartRefresh + 5.0-frameTolerance:
                    # keep track of stop time/frame for later
                    l_point.tStop = t  # not accounting for scr refresh
                    l_point.tStopRefresh = tThisFlipGlobal  # on global time
                    l_point.frameNStop = frameN  # exact frame index
                    # update status
                    l_point.status = FINISHED
                    l_point.setAutoDraw(False)
            
            # *r_point* updates
            
            # if r_point is starting this frame...
            if r_point.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                r_point.frameNStart = frameN  # exact frame index
                r_point.tStart = t  # local t and not account for scr refresh
                r_point.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(r_point, 'tStartRefresh')  # time at next scr refresh
                # update status
                r_point.status = STARTED
                r_point.setAutoDraw(True)
            
            # if r_point is active this frame...
            if r_point.status == STARTED:
                # update params
                pass
            
            # if r_point is stopping this frame...
            if r_point.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > r_point.tStartRefresh + 5.0-frameTolerance:
                    # keep track of stop time/frame for later
                    r_point.tStop = t  # not accounting for scr refresh
                    r_point.tStopRefresh = tThisFlipGlobal  # on global time
                    r_point.frameNStop = frameN  # exact frame index
                    # update status
                    r_point.status = FINISHED
                    r_point.setAutoDraw(False)
            
            # *CC_resp* updates
            waitOnFlip = False
            
            # if CC_resp is starting this frame...
            if CC_resp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                CC_resp.frameNStart = frameN  # exact frame index
                CC_resp.tStart = t  # local t and not account for scr refresh
                CC_resp.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(CC_resp, 'tStartRefresh')  # time at next scr refresh
                # update status
                CC_resp.status = STARTED
                # keyboard checking is just starting
                waitOnFlip = True
                win.callOnFlip(CC_resp.clock.reset)  # t=0 on next screen flip
                win.callOnFlip(CC_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
            
            # if CC_resp is stopping this frame...
            if CC_resp.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > CC_resp.tStartRefresh + 5-frameTolerance:
                    # keep track of stop time/frame for later
                    CC_resp.tStop = t  # not accounting for scr refresh
                    CC_resp.tStopRefresh = tThisFlipGlobal  # on global time
                    CC_resp.frameNStop = frameN  # exact frame index
                    # update status
                    CC_resp.status = FINISHED
                    CC_resp.status = FINISHED
            if CC_resp.status == STARTED and not waitOnFlip:
                theseKeys = CC_resp.getKeys(keyList=['left','right', 'space'], ignoreKeys=["escape"], waitRelease=False)
                _CC_resp_allKeys.extend(theseKeys)
                if len(_CC_resp_allKeys):
                    CC_resp.keys = _CC_resp_allKeys[-1].name  # just the last key pressed
                    CC_resp.rt = _CC_resp_allKeys[-1].rt
                    CC_resp.duration = _CC_resp_allKeys[-1].duration
                    # was this correct?
                    if (CC_resp.keys == str(answ)) or (CC_resp.keys == answ):
                        CC_resp.corr = 1
                    else:
                        CC_resp.corr = 0
                    # a response ends the routine
                    continueRoutine = False
            
            # check for quit (typically the Esc key)
            if defaultKeyboard.getKeys(keyList=["escape"]):
                thisExp.status = FINISHED
            if thisExp.status == FINISHED or endExpNow:
                endExperiment(thisExp, win=win)
                return
            # pause experiment here if requested
            if thisExp.status == PAUSED:
                pauseExperiment(
                    thisExp=thisExp, 
                    win=win, 
                    timers=[routineTimer, globalClock], 
                    currentRoutine=CC_answer,
                )
                # skip the frame we paused on
                continue
            
            # has a Component requested the Routine to end?
            if not continueRoutine:
                CC_answer.forceEnded = routineForceEnded = True
            # has the Routine been forcibly ended?
            if CC_answer.forceEnded or routineForceEnded:
                break
            # has every Component finished?
            continueRoutine = False
            for thisComponent in CC_answer.components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "CC_answer" ---
        for thisComponent in CC_answer.components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # store stop times for CC_answer
        CC_answer.tStop = globalClock.getTime(format='float')
        CC_answer.tStopRefresh = tThisFlipGlobal
        thisExp.addData('CC_answer.stopped', CC_answer.tStop)
        # check responses
        if CC_resp.keys in ['', [], None]:  # No response was made
            CC_resp.keys = None
            # was no response the correct answer?!
            if str(answ).lower() == 'none':
               CC_resp.corr = 1;  # correct non-response
            else:
               CC_resp.corr = 0;  # failed to respond (incorrectly)
        # store data for stage (TrialHandler)
        stage.addData('CC_resp.keys',CC_resp.keys)
        stage.addData('CC_resp.corr', CC_resp.corr)
        if CC_resp.keys != None:  # we had a response
            stage.addData('CC_resp.rt', CC_resp.rt)
            stage.addData('CC_resp.duration', CC_resp.duration)
        # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
        if CC_answer.maxDurationReached:
            routineTimer.addTime(-CC_answer.maxDuration)
        elif CC_answer.forceEnded:
            routineTimer.reset()
        else:
            routineTimer.addTime(-5.000000)
        
        # --- Prepare to start Routine "blank" ---
        # create an object to store info about Routine blank
        blank = data.Routine(
            name='blank',
            components=[fix],
        )
        blank.status = NOT_STARTED
        continueRoutine = True
        # update component parameters for each repeat
        # store start times for blank
        blank.tStartRefresh = win.getFutureFlipTime(clock=globalClock)
        blank.tStart = globalClock.getTime(format='float')
        blank.status = STARTED
        thisExp.addData('blank.started', blank.tStart)
        blank.maxDuration = None
        # keep track of which components have finished
        blankComponents = blank.components
        for thisComponent in blank.components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        frameN = -1
        
        # --- Run Routine "blank" ---
        thisExp.currentRoutine = blank
        blank.forceEnded = routineForceEnded = not continueRoutine
        while continueRoutine and routineTimer.getTime() < 0.5:
            # if trial has changed, end Routine now
            if hasattr(thisStage, 'status') and thisStage.status == STOPPING:
                continueRoutine = False
            # get current time
            t = routineTimer.getTime()
            tThisFlip = win.getFutureFlipTime(clock=routineTimer)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *fix* updates
            
            # if fix is starting this frame...
            if fix.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                fix.frameNStart = frameN  # exact frame index
                fix.tStart = t  # local t and not account for scr refresh
                fix.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(fix, 'tStartRefresh')  # time at next scr refresh
                # update status
                fix.status = STARTED
                fix.setAutoDraw(True)
            
            # if fix is active this frame...
            if fix.status == STARTED:
                # update params
                pass
            
            # if fix is stopping this frame...
            if fix.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > fix.tStartRefresh + 0.5-frameTolerance:
                    # keep track of stop time/frame for later
                    fix.tStop = t  # not accounting for scr refresh
                    fix.tStopRefresh = tThisFlipGlobal  # on global time
                    fix.frameNStop = frameN  # exact frame index
                    # update status
                    fix.status = FINISHED
                    fix.setAutoDraw(False)
            
            # check for quit (typically the Esc key)
            if defaultKeyboard.getKeys(keyList=["escape"]):
                thisExp.status = FINISHED
            if thisExp.status == FINISHED or endExpNow:
                endExperiment(thisExp, win=win)
                return
            # pause experiment here if requested
            if thisExp.status == PAUSED:
                pauseExperiment(
                    thisExp=thisExp, 
                    win=win, 
                    timers=[routineTimer, globalClock], 
                    currentRoutine=blank,
                )
                # skip the frame we paused on
                continue
            
            # has a Component requested the Routine to end?
            if not continueRoutine:
                blank.forceEnded = routineForceEnded = True
            # has the Routine been forcibly ended?
            if blank.forceEnded or routineForceEnded:
                break
            # has every Component finished?
            continueRoutine = False
            for thisComponent in blank.components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # --- Ending Routine "blank" ---
        for thisComponent in blank.components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # store stop times for blank
        blank.tStop = globalClock.getTime(format='float')
        blank.tStopRefresh = tThisFlipGlobal
        thisExp.addData('blank.stopped', blank.tStop)
        # using non-slip timing so subtract the expected duration of this Routine (unless ended on request)
        if blank.maxDurationReached:
            routineTimer.addTime(-blank.maxDuration)
        elif blank.forceEnded:
            routineTimer.reset()
        else:
            routineTimer.addTime(-0.500000)
        # mark thisStage as finished
        if hasattr(thisStage, 'status'):
            thisStage.status = FINISHED
        # if awaiting a pause, pause now
        if stage.status == PAUSED:
            thisExp.status = PAUSED
            pauseExperiment(
                thisExp=thisExp, 
                win=win, 
                timers=[globalClock], 
            )
            # once done pausing, restore running status
            stage.status = STARTED
        thisExp.nextEntry()
        
    # completed 1.0 repeats of 'stage'
    stage.status = FINISHED
    
    if thisSession is not None:
        # if running in a Session with a Liaison client, send data up to now
        thisSession.sendExperimentData()
    
    # mark experiment as finished
    endExperiment(thisExp, win=win)


def saveData(thisExp):
    """
    Save data from this experiment
    
    Parameters
    ==========
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    """
    filename = thisExp.dataFileName
    # these shouldn't be strictly necessary (should auto-save)
    thisExp.saveAsWideText(filename + '.csv', delim='auto')
    thisExp.saveAsPickle(filename)


def endExperiment(thisExp, win=None):
    """
    End this experiment, performing final shut down operations.
    
    This function does NOT close the window or end the Python process - use `quit` for this.
    
    Parameters
    ==========
    thisExp : psychopy.data.ExperimentHandler
        Handler object for this experiment, contains the data to save and information about 
        where to save it to.
    win : psychopy.visual.Window
        Window for this experiment.
    """
    # stop any playback components
    if thisExp.currentRoutine is not None:
        for comp in thisExp.currentRoutine.getPlaybackComponents():
            comp.stop()
    if win is not None:
        # remove autodraw from all current components
        win.clearAutoDraw()
        # Flip one final time so any remaining win.callOnFlip() 
        # and win.timeOnFlip() tasks get executed
        win.flip()
    # return console logger level to WARNING
    logging.console.setLevel(logging.WARNING)
    # mark experiment handler as finished
    thisExp.status = FINISHED
    # run any 'at exit' functions
    for fcn in runAtExit:
        fcn()
    logging.flush()


def quit(thisExp, win=None, thisSession=None):
    """
    Fully quit, closing the window and ending the Python process.
    
    Parameters
    ==========
    win : psychopy.visual.Window
        Window to close.
    thisSession : psychopy.session.Session or None
        Handle of the Session object this experiment is being run from, if any.
    """
    thisExp.abort()  # or data files will save again on exit
    # make sure everything is closed down
    if win is not None:
        # Flip one final time so any remaining win.callOnFlip() 
        # and win.timeOnFlip() tasks get executed before quitting
        win.flip()
        win.close()
    logging.flush()
    if thisSession is not None:
        thisSession.stop()
    # terminate Python process
    core.quit()


# if running this experiment as a script...
if __name__ == '__main__':
    # call all functions in order
    expInfo = showExpInfoDlg(expInfo=expInfo)
    thisExp = setupData(expInfo=expInfo)
    logFile = setupLogging(filename=thisExp.dataFileName)
    win = setupWindow(expInfo=expInfo)
    setupDevices(expInfo=expInfo, thisExp=thisExp, win=win)
    run(
        expInfo=expInfo, 
        thisExp=thisExp, 
        win=win,
        globalClock='float'
    )
    saveData(thisExp=thisExp)
    quit(thisExp=thisExp, win=win)
