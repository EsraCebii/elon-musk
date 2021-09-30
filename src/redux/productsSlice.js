import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        items: [
            {
                id: '1',
                name: 'Bitcoin',
                price: 49809,
                amount: 0,
                img: "https://iaaspr.tmgrup.com.tr/076c4a/806/378/0/7/728/348?u=https://iaspr.tmgrup.com.tr/2021/04/28/bitcoin-ne-kadar-1-btc-kac-dolar-kac-tl-28-nisan-bitcoin-kuru-hareketleri-kripto-para-1619582247398.jpeg",
            },
            {
                id: '2',
                name: 'Dogecoin',
                amount: 0,
                price: 0.295300,
                img: "https://i-invdn-com.investing.com/ico_flags/80x80/v32/dogecoin.png",
            },
            {
                id: '3',
                name: 'Electric Car: Model S',
                amount: 0,
                price: 82990,
                img: "https://staticb.yolcu360.com/blog/wp-content/uploads/2020/07/03124836/model-s%402x-960x450.jpg",
            },
            {
                id: '4',
                name: 'Cello',
                amount: 0,
                price: 829,
                img: "https://www.do-re.com.tr/stentor-ii-4-4-cello-satin-finish-e2ef736e40c3dc109368cef90f1c21d8-22dacaeb782b56c1db9e9ab53fcbc14f-mid-pp.jpg",
            },
            {
                id: '5',
                name: 'MacBook Pro 13”',
                amount: 0,
                price: 1299,
                img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp16touch-silver-select-201911_GEO_TR?wid=1808&hei=1686&fmt=jpeg&qlt=80&.v=1582326712881",
            },
            {
                id: '6',
                name: 'Harley Davidson- Sportster S',
                amount: 0,
                price: 23200,
                img: "https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2021/2021-sportster-s/2021-sportster-s-e85/2021-sportster-s-e85-motorcycle.jpg?impolicy=myresize&rw=500",
            },
            {
                id: '7',
                name: 'Caravan',
                amount: 0,
                price: 68900,
                img: "https://cdn1.rvtrader.com/v1/media/61200bb73f1ae11105735116.jpg?width=1024&height=768&quality=70&bestfit=true&upsize=true&blurBackground=true&blurValue=100&upsize=true",
            },
            {
                id: '8',
                name: 'GRECA LABYRINTH LEATHER BOOTS',
                amount: 0,
                price: 1525,
                img: "https://www.versace.com/dw/image/v2/ABAO_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dw5216ee30/original/90_1000791-1A00633_1B00B_20_GrecaLabyrinthLeatherBoots-Boots-versace-online-store_3_2.jpg?sw=414&sh=582&sm=fit&sfrm=jpg",
            },
            {
                id: '9',
                name: 'Parfüm',
                amount: 0,
                price: 102,
                img: "https://cdn.beymen.com/mnresize/900/1254/productimages/hfsw2cou.r5k_IMG_01_8011003809219.jpg",
            },
            {
                id: '10',
                name: 'Boat',
                amount: 0,
                price: 220000,
                img: "https://worldyachtgroup.com/wp-content/uploads/2020/02/Liquid-Sky-superyacht-CMB-for-charter.jpg",
            },
            {
                id: '11',
                name: 'Piano',
                price: 15990,
                amount: 0,
                img: "https://images.musicstore.de/images/0640/yamaha-c3a-gebraucht-bj-87-snr-4440852-schwarz-poliert_1_PIA0002554-000.jpg",
            },
            {
                id: '12',
                name: 'Guitar',
                amount: 0,
                price: 230,
                img: "https://images.musicstore.de/images/0640/j-und-d-sa-mini-sunburst-_1_GIT0028064-000.jpg",
            },
            {
                id: '13',
                name: 'Yoga Mat',
                amount: 0,
                price: 24,
                img: "https://www.yogastore-shop.com/data/tmp/3/3/10813_3.jpg?1582639422",
            },
            {
                id: '14',
                amount: 0,
                name: 'Jet',
                price: 40000000,
                img: "https://icdn.ensonhaber.com/resimler/galeri/20800_50db6dc8e28648179b2ef719fa381fa5.jpg",
            },
            {
                id: '15',
                name: 'The Scream',
                price: 119.9,
                amount: 0,
                img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/The_Scream_Pastel.jpg/800px-The_Scream_Pastel.jpg",
            },
            {
                id: '16',
                name: 'Portrait of Joseph Roulin',
                amount: 0,
                price: 1253,
                img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Vincent_van_Gogh_-_Portrait_of_Joseph_Roulin.jpg/800px-Vincent_van_Gogh_-_Portrait_of_Joseph_Roulin.jpg",
            },
            {
                id: '17',
                name: 'Spring',
                amount: 0,
                price: 651,
                img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/%C3%89douard_Manet_-_Jeanne_%28Spring%29.jpg/800px-%C3%89douard_Manet_-_Jeanne_%28Spring%29.jpg",
            },
            {
                id: '18',
                name: 'The Card Players',
                amount: 0,
                price: 288,
                img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Les_Joueurs_de_cartes%2C_par_Paul_C%C3%A9zanne%2C_collection_Al-Thani%2C_Yorck.jpg/800px-Les_Joueurs_de_cartes%2C_par_Paul_C%C3%A9zanne%2C_collection_Al-Thani%2C_Yorck.jpg",
            },
            {
                id: '19',
                name: "First edition book",
                amount: 0,
                price: 300,
                img: "https://static.nadirkitap.com/fotograf/2438/3/Kitap_20180916011107_2438_4.jpg",
            },
            {
                id: '20',
                name: "iPhone 12 Pro",
                amount: 0,
                price: 999,
                img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-family-hero?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1604021663000",
            },
            {
                id: '21',
                name: "T-shirt",
                amount: 0,
                price: 15,
                img: "https://www.hollyhood.com.tr/contra-ters-yon-tshirt-23864-contra-contra-14554-23-O.jpg",
            },
            {
                id: '22',
                name: "T-shirt",
                amount: 0,
                price: 3,
                img: "https://www.hollyhood.com.tr/contra-ters-yon-tshirt-23864-contra-contra-14554-23-O.jpg",
            },
            {
                id: '23',
                name: "Island",
                amount: 0,
                price: 151e6,
                img: "https://icdn.ensonhaber.com/resimler/galeri/1_11195.jpg",
            },
        ],
        money: 151e6,
        moneyArray: [],
    },
    reducers: {
        handleChange: (state, action) => {
            state.items.amount = action.payload;
        },
        decrement: (state, action) => {
            const index = state.items.findIndex(todo => todo.id === action.payload);
            if ((state.items[index].amount) > 0) {
                (state.items[index].amount) -= 1;
                state.money = (state.money + (state.items[index].price));
                state.moneyArray.unshift(state.money)
            }
        },
        increment: (state, action) => {
            const { id } = action.payload
            const index = state.items.findIndex(todo => todo.id === id);
            if ((state.money >= (state.items[index].price))) {
                state.items[index].amount += 1;
                state.money = (state.money - (state.items[index].price));
                state.moneyArray.unshift(state.money)
            }
        },
        moneyRestart: (state) => {
            state.money = 151e6;
            
        }
    },
    extraReducers: {},

});

export const { handleChange, decrement, increment, moneyRestart } = productsSlice.actions;
export default productsSlice.reducer;