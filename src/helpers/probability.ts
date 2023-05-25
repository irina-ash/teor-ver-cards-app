export const calcOneCard = (fav_count: number, all_count: number) => 
    Number((fav_count/all_count) * 100).toFixed(2);