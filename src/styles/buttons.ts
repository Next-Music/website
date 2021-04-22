import { CSSProperties } from 'react';
import { defaultsDeep } from 'lodash/fp';
import colors from './colors';

const defaults = {
    border: 'solid',
    borderWidth: 2
};

export const whiteHollowBtnStyle = defaultsDeep(defaults, {
    background: 'transparent !important',
    borderColor: `${colors.white} !important`,
    color: `${colors.white} !important`
}) as CSSProperties;

export const primaryHollowBtnStyle = defaultsDeep(defaults, {
    background: 'transparent !important',
    borderColor: `${colors.primary} !important`,
    color: `${colors.primary} !important`
}) as CSSProperties;

export const primaryFilledBtnStyle = defaultsDeep(defaults, {
    background: `${colors.primary} !important`,
    borderColor: `${colors.primary} !important`,
    color: `${colors.white} !important`
});

export const darkFilledBtnStyle = defaultsDeep(defaults, {
    background: `${colors.mineshaft} !important`,
    borderColor: `${colors.mineshaft} !important`,
    color: `${colors.white} !important`
});

export const redHollowBtnStyle = defaultsDeep(defaults, {
    background: 'transparent !important',
    borderColor: `${colors.persimmon} !important`,
    color: `${colors.persimmon} !important`
}) as CSSProperties;

export const redFilledBtnStyle = defaultsDeep(defaults, {
    background: `${colors.persimmon} !important`,
    borderColor: `${colors.persimmon} !important`,
    color: `${colors.white} !important`
});
