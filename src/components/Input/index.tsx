import styles from "./styles.module.css";

type inputProps = {
    labelText: string;
    id: string;
} & React.ComponentProps<"input">;

export function Input({ id, labelText, type, ...rest }: inputProps) {
    return (
        <>
            <label htmlFor={id}>{labelText}</label>
            <input className={styles.input} id={id} type={type} {...rest} />
        </>
    );
}   