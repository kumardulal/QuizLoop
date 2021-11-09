import * as Font from 'expo-font';

export function useCustomFonts() {
    let [fontsLoaded] = Font.useFonts({
        PokemonPixelFont: require('../../assets/fonts/PokemonPixelFont-Normal.woff')
    });

    return [fontsLoaded];
}