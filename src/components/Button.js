import PropTypes from'prop-types';
import className from 'classnames';
import twMerge  from 'tailwind-merge';



function Button({
    children,
    primary,
    secondary,
    success,
    danger,
    warning,
    outline,
    rounded,
   ...rest
}){
const classes = className ( rest.className, 'flex items-center px-3 py-1.5 border',{
    'border-black-500 bg-blue-500 text-white': primary,
    'border-gray-900 bg-gray-100 text-black': secondary,
    'border-green-500 bg-green-500 text-white': success,
    'border-red-500 bg-red-500 text-black': danger,
    'border-yellow-500 bg-yellow-500 text-white': warning,
    'rounded-full' :rounded,
    'bg-white':outline,
    'text-blue-500':outline&&primary,
    'text-gray-900':outline&&secondary,
    'text-green-500':outline&&success,
    'text-red-500':outline&&danger,
    'text-yellow-500':outline&&warning
}
 )

    return <button {...rest} className={classes}>{children}</button>
}


Button.propTypes = {
   checkVarValue : ({primary,secondary,success,danger,warning,}) =>{
    const count = Number(!!primary) + Number(!!secondary) +Number(!!success) +Number(!!danger) +Number(!!warning)
    if (count>1) {
        return new Error('Only any one of the props should be passed down');
    }
    }};
export default Button;