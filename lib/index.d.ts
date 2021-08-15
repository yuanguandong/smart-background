interface KeyEventProps {
    events: {
        [key: string]: (e: KeyboardEvent) => void;
    };
    needFocusing?: boolean;
    [key: string]: any;
}
declare const KeyEvent: (props: KeyEventProps) => JSX.Element;
export default KeyEvent;
