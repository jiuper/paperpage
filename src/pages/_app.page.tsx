import type { AppProps } from "next/app";

import "@/shared/styles/global.scss";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-blue/theme.css";

function App({ Component, ...rest }: AppProps) {
    return <Component {...rest.pageProps} />;
}

export default App;
