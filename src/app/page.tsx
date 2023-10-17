import ThemeSelector from "@/app/ThemeSelector";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center m-auto p-24 space-y-4 max-w-[60rem]">
            <ThemeSelector/>
            <div className={"secondary-container rounded p-4 shadow-lg"}>
                <p className={"body-large on-secondary-container-text"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum blandit metus ut neque molestie, vitae posuere enim convallis. Nullam blandit neque dolor, sed facilisis tellus lacinia in. Nullam consequat dolor et massa efficitur pharetra. Sed ultrices libero a elit imperdiet commodo. Sed quis neque non lectus aliquet commodo. Pellentesque ac elit pretium, convallis ante non, blandit magna. Cras suscipit at odio convallis imperdiet. In fermentum sapien et diam mollis mattis. Sed pretium purus quis venenatis lacinia.</p>
            </div>
        </main>
    )
}
