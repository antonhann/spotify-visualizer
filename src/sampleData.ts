export interface Notifications{
    snapchat: number
    instagram: number
    discord: number
    messages: number
    total: number
    most: string
}
const apps: (keyof Omit<Notifications, 'total' | 'most'>)[] = ["snapchat", "instagram", "discord", "messages"];

export let decemberData : Notifications[] = []
for(let i = 0; i < 31; i++){
    let dayData : Notifications = {
        snapchat: Math.floor(Math.random() * 101),
        instagram: Math.floor(Math.random() * 101),
        discord: Math.floor(Math.random() * 101),
        messages: Math.floor(Math.random() * 101),
        total : 0,
        most: ""
    }
    let maxNoti = 0;
    let maxApp: keyof Omit<Notifications, 'total' | 'most'> = "snapchat";
    
    // Iterate through the apps array to find the maximum
    for (const app of apps) {
        if (dayData[app] > maxNoti) {
            maxNoti = dayData[app];
            maxApp = app;
        }
    }
    
    // Update the total and most fields
    dayData.total = dayData.snapchat + dayData.instagram + dayData.discord + dayData.messages;
    dayData.most = maxApp;
    decemberData.push(dayData)
}