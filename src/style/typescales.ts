import './font.css'

interface TypeScaleLevelValue {
   fontFamily: string,
   lineHeight: string,
   fontSize: number,
   letterSpacing: number,
   fontWeight: number
}

interface TypeScaleLevels{
    large: TypeScaleLevelValue,
    medium: TypeScaleLevelValue,
    small: TypeScaleLevelValue
}

interface TypeScalesType {
    display: TypeScaleLevels
    headline: TypeScaleLevels
    title: TypeScaleLevels
    label: TypeScaleLevels
    body: TypeScaleLevels
}

const TypeScales: TypeScalesType  = {
    display: {
        large: {
            fontFamily: "RobotoFlex,Roboto,system-ui,sans-serif",
            lineHeight: '64px',
            fontSize: 57,
            letterSpacing: 0,
            fontWeight: 400,
        },
        medium: {
            fontFamily: "RobotoFlex,Roboto,system-ui,sans-serif",
            lineHeight: '52px',
            fontSize: 45,
            letterSpacing: 0,
            fontWeight: 400,
        },
        small: {
            fontFamily: "RobotoFlex,Roboto,system-ui,sans-serif",
            lineHeight: '44px',
            fontSize: 36,
            letterSpacing: 0,
            fontWeight: 400,
        },
    },
    headline:{
        large: {
            fontFamily: "RobotoFlex,Roboto,system-ui,sans-serif",
            lineHeight: '40px',
            fontSize: 32,
            letterSpacing: 0,
            fontWeight: 400,
        },        
        medium: {
            fontFamily: "RobotoFlex,Roboto,system-ui,sans-serif",
            lineHeight: '36px',
            fontSize: 28,
            letterSpacing: 0,
            fontWeight: 400,
        },
        small: {
            fontFamily: "RobotoFlex,Roboto,system-ui,sans-serif",
            lineHeight: '32px',
            fontSize: 24,
            letterSpacing: 0,
            fontWeight: 400,
        },
    },title:{
        large: {
            fontFamily: "RobotoFlex,Roboto,system-ui,sans-serif",
            lineHeight: '28px',
            fontSize: 22,
            letterSpacing: 0,
            fontWeight: 400,
        },        
        medium: {
            fontFamily: "RobotoFlex,Roboto,system-ui,sans-serif",
            lineHeight: '24px',
            fontSize: 16,
            letterSpacing: 0.15,
            fontWeight: 400,
        },
        small: {
            fontFamily: "RobotoFlex,Roboto,system-ui,sans-serif",
            lineHeight: '20px',
            fontSize: 14,
            letterSpacing: 0,
            fontWeight: 500,
        },
    },
    label: {
        large: {
            fontFamily: "RobotoFlex,Roboto,system-ui,sans-serif",
            lineHeight: '20px',
            fontSize: 14,
            letterSpacing: 0.1,
            fontWeight: 500,
        },
        medium: {
            fontFamily: "RobotoFlex,Roboto,system-ui,sans-serif",
            lineHeight: '16px',
            fontSize: 12,
            letterSpacing: 0.5,
            fontWeight: 500,
        },
        small: {
            fontFamily: "RobotoFlex,Roboto,system-ui,sans-serif",
            lineHeight: '16px',
            fontSize: 11,
            letterSpacing: 0.5,
            fontWeight: 500,
        },
    },
    body: {
        large: {
            fontFamily: "RobotoFlex,Roboto,system-ui,sans-serif",
            lineHeight: '24px',
            fontSize: 16,
            letterSpacing: 0.5,
            fontWeight: 500,
        },
        medium: {
            fontFamily: "RobotoFlex,Roboto,system-ui,sans-serif",
            lineHeight: '20px',
            fontSize: 14,
            letterSpacing: 0.25,
            fontWeight: 500,
        },
        small: {
            fontFamily: "RobotoFlex,Roboto,system-ui,sans-serif",
            lineHeight: '16px',
            fontSize: 12,
            letterSpacing: 0.4,
            fontWeight: 500,
        },
    }
}

export default TypeScales