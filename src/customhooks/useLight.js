import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const useLight = () => {
    const { systemTheme, theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(()=>{
        setMounted(true);
    },[])
    if (!mounted) return null;
    const currentTheme = theme === 'system' ? systemTheme : theme;
    
    return currentTheme;
};

export default useLight;
