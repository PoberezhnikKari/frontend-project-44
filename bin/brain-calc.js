#!/usr/bin/env node

import { startGame } from '../src/index.js';
import { getQuestionAndAnswer } from '../src/games/brain-calc.js';

startGame('Calculator', getQuestionAndAnswer);