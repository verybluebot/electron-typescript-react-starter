export type State = typeof initialState;

export type Props = {
    onClick: (e: import('react').MouseEvent<HTMLElement>) => void
} & typeof defaultProps;

export const initialState = Object.freeze({
    isActive: false
});

export const defaultProps = Object.freeze({
    label: 'Click',
    onClick: () => {}
});
