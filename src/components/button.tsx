import { withStyles } from '@material-ui/core';
import MaterialButton from '@material-ui/core/Button';
import { propOr } from 'lodash/fp';
import { CSSProperties, FunctionComponent } from 'react';
import { BeatLoader } from 'react-spinners';

import colors from '../styles/colors';

interface Props {
    onPress?: (e?: any) => void;
    style?: CSSProperties;
    hoverStyle?: CSSProperties;
    disableStyle?: CSSProperties;
    label: string | any;
    loading?: any;
    disabled?: boolean;
    submit?: boolean;
}

export const Button: FunctionComponent<Props> = props => {
    const { onPress, label, loading, disabled, submit } = props;
    const ButtonWithStyles = StyledButton(
        propOr({}, 'style', props),
        propOr({}, 'hoverStyle', props),
        propOr({}, 'disableStyle', props),
        propOr(false, 'disabled', props)
    );
    return (
        <ButtonWithStyles
            type={submit ? 'submit' : undefined}
            disabled={disabled}
            variant="contained"
            onClick={e => {
                if (loading || disabled || !onPress) {
                    return;
                }
                onPress(e);
            }}
        >
            {loading ? (
                <div
                    style={{
                        display: 'inline-block',
                        verticalAlign: 'middle',
                        transform: 'translate(0, 2px)'
                    }}
                >
                    <BeatLoader color={colors.white} margin={0} size={8} />
                </div>
            ) : (
                label
            )}
        </ButtonWithStyles>
    );
};

const StyledButton = (
    style: CSSProperties,
    hoverStyle: CSSProperties,
    disableStyle: CSSProperties,
    disabled: boolean
) =>
    withStyles(() => ({
        root: {
            ...DefaultStyles,
            ...style,
            '&:hover': {
                ...DefaultStyles,
                ...style,
                ...hoverStyle
            },
            ...(disabled && {
                background: colors.lightGray,
                color: colors.lightGray,
                ...disableStyle
            })
        }
    }))(MaterialButton);

const DefaultStyles = {
    padding: '10px 40px',
    border: 'none',
    borderRadius: 100,
    fontFamily: 'Roboto-Bold',
    fontSize: 16,
    textTransform: 'none',
    background: colors.primary,
    color: colors.white
} as CSSProperties;
