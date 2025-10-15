import { Stack } from "expo-router";
//you're so cool
export default function RootLayout() {
    return(
        <Stack>
            <Stack.Screen name="index" options={{title:"Index Page"}}/>
            <Stack.Screen name="about" options={{title:"About Page"}}/>
            <Stack.Screen name="silly" options={{title:"Silly Page"}}/>
        </Stack>
    );
}
