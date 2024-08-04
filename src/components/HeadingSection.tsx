import {SectionLayout} from "./SectionLayout.tsx";
import {useEffect, useState} from "react";
import {siApi} from "../api/siApi.ts";

export const HeadingSection = () => {
    const [test, setTest] = useState<number>();
    const [testLoading, setTestLoading] = useState(true);
    const [errorTest, setErrorTest] = useState<string>();
    const [errorTestLoading, setErrorTestLoading] = useState(true);

    useEffect(() => {
        siApi.getTest(42).then((res) => {
            if (res.success) setTest(res.data)
        }).finally(() => setTestLoading(false));
        siApi.getErrorTest(42).then((res) => {
            if (!res.success) setErrorTest(res.errors.join(", "))
        }).finally(() => setErrorTestLoading(false));
    }, []);

    return (
        <SectionLayout>
            <p>{testLoading ? "Loading..." : test}</p>
            <p>{errorTestLoading ? "Loading..." : errorTest}</p>
        </SectionLayout>
    )
}
