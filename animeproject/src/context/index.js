import { AnimeListProvider } from "./animeListContext";
import { RandomAnimeProvider } from "./randomAnimeContext";
import { LoginProvider } from "./loginContext";

export default function StateProvider(props) {
    return(
        <LoginProvider>
            <AnimeListProvider>
                <RandomAnimeProvider>
                    {props.children}
                </RandomAnimeProvider>
            </AnimeListProvider>
        </LoginProvider>
    )
}