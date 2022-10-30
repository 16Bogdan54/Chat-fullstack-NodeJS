import {Input} from "./JoinFormStyles";

export const Field = ({type, setter}) => {
    return (<Input
            type={type}
            onChange={(e) => {
                setter(e.target.value);
            }}
        />
    )
}