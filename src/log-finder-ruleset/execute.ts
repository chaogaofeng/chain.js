import { createReturningLogFinder } from '@terra-money/log-finder';
import { Event } from '../core';
import { LogFindersAmountRuleSet, LogFindersActionRuleSet } from './types';

export const createLogMatcherForActions = (
  injectedLogFindersRuleSet: LogFindersActionRuleSet[] = []
) => {
  const logFindersRuleSet = [...injectedLogFindersRuleSet];

  const logFinders = logFindersRuleSet.map(({ rule, transform }) =>
    createReturningLogFinder(rule, transform)
  );
  return (events: Event[]) =>
    events?.flatMap(event =>
      logFinders?.map(logFinderFn => logFinderFn(event))
    );
};

export const createLogMatcherForAmounts = (
  injectedLogFindersRuleSet: LogFindersAmountRuleSet[] = []
) => {
  const logFindersRuleSet = [...injectedLogFindersRuleSet];

  const logFinders = logFindersRuleSet.map(({ rule, transform }) =>
    createReturningLogFinder(rule, transform)
  );
  return (events: Event[]) =>
    events?.flatMap(event =>
      logFinders?.map(logFinderFn => logFinderFn(event))
    );
};
