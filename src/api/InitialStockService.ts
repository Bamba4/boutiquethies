import {Request, Response} from "express";
import Commande from "../model/commande";
import InitialStock from "../model/initialStock";

export const InitialStockService = {
    createInitialStock: async (req: Request, resp: Response) => {
        console.log('cree un nouveau initial Stock');
        const initialStockToCreate = new InitialStock(req.body);
        console.log({initialStockToCreate});
        await initialStockToCreate.save((err: any) => {
            if (err) resp.status(400).send(err);
            resp.send(initialStockToCreate)
        })
    },

    updateInitialStock: async (req: Request, resp: Response) => {
        console.log('updating initial stock');
        const id = req.params.id;
        const initialStockToReturn = await InitialStock.findByIdAndUpdate(id, req.body)
        console.log({ initialStockToReturn })
        return resp.send(initialStockToReturn)
    },

    deleteInitialStock: async (req: Request, resp: Response) => {
        console.log('deleting InitialS tock');
        const id = req.params.id;
        const initialStockToFound = await InitialStock.findById(id);
        resp.json({"msg": "Cette InitialStock a ete supprimer avec success"})
        initialStockToFound?.delete()
    },

    getInitialStockByDate: async (req: Request, resp: Response) => {
        console.log('commande by id');
        await InitialStock.find({'$or':[{'deliveredAt': req.params.date+'T00:00:00.000Z'}, {'updateAt': req.params.date+'T00:00:00.000Z'}]}).sort({'deliveredAt': '1'}).exec((err, commandes) => {
            if (err) console.log(err);
            else resp.send(commandes)
        })
    },

    getAllInitialStocks: async (req: Request, resp: Response) => {
        console.log('getting all Initial Stock.');
        await InitialStock.find({}).sort({}).exec((err, stocks) => {
            if (err) console.log(err);
            else resp.send(stocks)
        })
    },
    getSASS:  (req: Request, resp: Response) => {
        return resp.send(
            `$themesList: (
                blackTheme: (
                    primaryColor: #000000,
                    secondaryColor: #666666,
                    gradientC1: #000000,
                    gradientC2: #333333,
                    tpbtnc1: #000000,
                    tpbtnc2: #666666,
                    logoBgClr: #000000
                ),
                payomo: (
                    primaryColor: #57468b,
                    secondaryColor: #ff8a73,
                    gradientC1: #57468b,
                    gradientC2: #5580ff,
                    tpbtnc1: #57468b,
                    tpbtnc2: #ff8a73,
                    logoBgClr: #ffffff
                ),
                feldTheme: (
                    primaryColor: #ffae00,
                    secondaryColor: #000000,
                    gradientC1: #000000,
                    gradientC2: #222222,
                    tpbtnc1: #ffae00,
                    tpbtnc2: #000000,
                    logoBgClr: #000000
                ),
                goldTheme: (
                    primaryColor: #d6c792,
                    secondaryColor: #2d3e52,
                    gradientC1: #d6c792,
                    gradientC2: #bca75e,
                    tpbtnc1: #d6c792,
                    tpbtnc2: #2d3e52,
                    logoBgClr: #fff
                ),
                omegaTheme: (
                    primaryColor: #234074,
                    secondaryColor: #009cec,
                    gradientC1: #234074,
                    gradientC2: #009cec,
                    tpbtnc1: #234074,
                    tpbtnc2: #009cec,
                    logoBgClr: #fff
                ),
                cchTheme: (
                    primaryColor: #0da7ee,
                    secondaryColor: #ff5500,
                    gradientC1: #0da7ee,
                    gradientC2: #40d6fb,
                    tpbtnc1: #0da7ee,
                    tpbtnc2: #ff5500,
                    logoBgClr: #fff
                ),
                amexTheme: (
                    primaryColor: #006fcf,
                    secondaryColor: #006fcf,
                    gradientC1: #006fcf,
                    gradientC2: #006fcf,
                    tpbtnc1: #006fcf,
                    tpbtnc2: #006fcf,
                    logoBgClr: #fff
                ),
                skylinkTheme: (
                    primaryColor: #246db5,
                    secondaryColor: #e30613,
                    gradientC1: #246db5,
                    gradientC2: #005ba6,
                    tpbtnc1: #246db5,
                    tpbtnc2: #e30613,
                    logoBgClr: #fff
                ),
                asta: (
                    primaryColor: #00abbe,
                    secondaryColor: #004368,
                    gradientC1: #00abbe,
                    gradientC2: #00abbe,
                    tpbtnc1: #00abbe,
                    tpbtnc2: #004368,
                    logoBgClr: #fff
                ),
                radicalRed: (
                    primaryColor: #fd464d,
                    secondaryColor: #69455f,
                    gradientC1: #fd464d,
                    gradientC2: #69455f,
                    tpbtnc1: #fd464d,
                    tpbtnc2: #69455f,
                    logoBgClr: #fff
                ),
                redOrange: (
                    primaryColor: #e42149,
                    secondaryColor: #f05237,
                    gradientC1: #e42149,
                    gradientC2: #f05237,
                    tpbtnc1: #e42149,
                    tpbtnc2: #ed6f1c,
                    logoBgClr: #fff
                ),
                prussianBlue: (
                    primaryColor: #082e58,
                    secondaryColor: #00b893,
                    gradientC1: #082e58,
                    gradientC2: #00b893,
                    tpbtnc1: #082e58,
                    tpbtnc2: #00b893,
                    logoBgClr: #fff
                ),
                palatinatePurple: (
                    primaryColor: #602962,
                    secondaryColor: #d17270,
                    gradientC1: #602962,
                    gradientC2: #d17270,
                    tpbtnc1: #602962,
                    tpbtnc2: #d17270,
                    logoBgClr: #fff
                ),
                redPink: (
                    primaryColor: #fc0a54,
                    secondaryColor: #fe02a7,
                    gradientC1: #fc0a54,
                    gradientC2: #fe02a7,
                    tpbtnc1: #fc0a54,
                    tpbtnc2: #fe02a7,
                    logoBgClr: #fff
                ),
                burgundyPurple: (
                    primaryColor: #941969,
                    secondaryColor: #9b4ae3,
                    gradientC1: #941969,
                    gradientC2: #9b4ae3,
                    tpbtnc1: #941969,
                    tpbtnc2: #9b4ae3,
                    logoBgClr: #fff
                ),
                purpleOrange: (
                    primaryColor: #6927cf,
                    secondaryColor: #fd6d7a,
                    gradientC1: #6927cf,
                    gradientC2: #fd6d7a,
                    tpbtnc1: #6927cf,
                    tpbtnc2: #fd6d7a,
                    logoBgClr: #fff
                ),
                bluePurpleLight: (
                    primaryColor: #2636ff,
                    secondaryColor: #cd04f9,
                    gradientC1: #2636ff,
                    gradientC2: #cd04f9,
                    tpbtnc1: #2636ff,
                    tpbtnc2: #cd04f9,
                    logoBgClr: #fff
                ),
                bluePurple: (
                    primaryColor: #23006e,
                    secondaryColor: #7d0372,
                    gradientC1: #23006e,
                    gradientC2: #7d0372,
                    tpbtnc1: #23006e,
                    tpbtnc2: #7d0372,
                    logoBgClr: #fff
                ),
                orangePink: (
                    primaryColor: #fd4a37,
                    secondaryColor: #f73f74,
                    gradientC1: #fd4a37,
                    gradientC2: #f73f74,
                    tpbtnc1: #fd4a37,
                    tpbtnc2: #f73f74,
                    logoBgClr: #fff
                ),
                tealGreen: (
                    primaryColor: #007680,
                    secondaryColor: #007836,
                    gradientC1: #007680,
                    gradientC2: #007836,
                    tpbtnc1: #007680,
                    tpbtnc2: #007836,
                    logoBgClr: #fff
                ),
                lightGreen: (
                    primaryColor: #00d063,
                    secondaryColor: #24d2c2,
                    gradientC1: #00d063,
                    gradientC2: #24d2c2,
                    tpbtnc1: #00d063,
                    tpbtnc2: #24d2c2,
                    logoBgClr: #fff
                ),
                burgundy: (
                    primaryColor: #c3083f,
                    secondaryColor: #950741,
                    gradientC1: #c3083f,
                    gradientC2: #950741,
                    tpbtnc1: #c3083f,
                    tpbtnc2: #950741,
                    logoBgClr: #fff
                ),
                purpletint: (
                    primaryColor: #7a2640,
                    secondaryColor: #4f1b1d,
                    gradientC1: #7a2640,
                    gradientC2: #4f1b1d,
                    tpbtnc1: #7a2640,
                    tpbtnc2: #4f1b1d,
                    logoBgClr: #fff
                ),
                bluetheme: (
                    primaryColor: #765dff,
                    secondaryColor: #b517ff,
                    gradientC1: #765dff,
                    gradientC2: #b517ff,
                    tpbtnc1: #765dff,
                    tpbtnc2: #b517ff,
                    logoBgClr: #fff
                ),
                royalBlue: (
                    primaryColor: #2f2fa1,
                    secondaryColor: #f64b71,
                    gradientC1: #2f2fa1,
                    gradientC2: #242582,
                    tpbtnc1: #2f2fa1,
                    tpbtnc2: #f64b71,
                    logoBgClr: #fff
                ),
                mast: (
                    primaryColor: #0c4b91,
                    secondaryColor: #ed1c24,
                    gradientC1: #0c4b91,
                    gradientC2: #4d92c8,
                    tpbtnc1: #0c4b91,
                    tpbtnc2: #ed1c24,
                    logoBgClr: #fff
                ),
                tp1: (
                    primaryColor: #ef5728,
                    secondaryColor: #f8b026,
                    gradientC1: #ef5728,
                    gradientC2: #f8b026,
                    tpbtnc1: #ef5728,
                    tpbtnc2: #f8b026,
                    logoBgClr: #eee
                ),
                tom1: (
                    primaryColor: #ff5f1c,
                    secondaryColor: #f8b026,
                    gradientC1: #ef5728,
                    gradientC2: #f8b026,
                    tpbtnc1: #ff5f1c,
                    tpbtnc2: #f8b026,
                    logoBgClr: #eee
                ),
                fx: (
                    primaryColor: #df1e17,
                    secondaryColor: #b6150f,
                    gradientC1: #df1e17,
                    gradientC2: #b6150f,
                    tpbtnc1: #df1e17,
                    tpbtnc2: #b6150f,
                    logoBgClr: #eee
                ),
                et: (
                    primaryColor: #2b81d8,
                    secondaryColor: #333333,
                    gradientC1: #3023ae,
                    gradientC2: #c96dd8,
                    tpbtnc1: #2b81d8,
                    tpbtnc2: #333333,
                    logoBgClr: #eee
                ),
                tp: (
                    primaryColor: #2e62ff,
                    secondaryColor: #283991,
                    gradientC1: #2e62ff,
                    gradientC2: #28dfff,
                    tpbtnc1: #2e62ff,
                    tpbtnc2: #283991,
                    logoBgClr: #2e62ff
                ),
                brightPurple: (
                    primaryColor: #6f41be,
                    secondaryColor: #009cec,
                    gradientC1: #6f41be,
                    gradientC2: #009cec,
                    tpbtnc1: #6f41be,
                    tpbtnc2: #009cec,
                    logoBgClr: #fff
                ),
                vividCyan: (
                    primaryColor: #04b59c,
                    secondaryColor: #00584c,
                    gradientC1: #04b59c,
                    gradientC2: #00584c,
                    tpbtnc1: #04b59c,
                    tpbtnc2: #00584c,
                    logoBgClr: #fff
                ),
                strongRed: (
                    primaryColor: #d71607,
                    secondaryColor: #3d3d3d,
                    gradientC1: #d71607,
                    gradientC2: #de1000,
                    tpbtnc1: #d71607,
                    tpbtnc2: #3d3d3d,
                    logoBgClr: #fff
                ),
                brightRed: (
                    primaryColor: #f9676b,
                    secondaryColor: #3d3d3d,
                    gradientC1: #f9676b,
                    gradientC2: #04b59c,
                    tpbtnc1: #f9676b,
                    tpbtnc2: #3d3d3d,
                    logoBgClr: #fff
                ),
                brightOrange: (
                    primaryColor: #ed8323,
                    secondaryColor: #555555,
                    gradientC1: #ed8323,
                    gradientC2: #ff8f2a,
                    tpbtnc1: #ed8323,
                    tpbtnc2: #555555,
                    logoBgClr: #fff
                ),
                vividOrange: (
                    primaryColor: #fe6400,
                    secondaryColor: #555555,
                    gradientC1: #fe6400,
                    gradientC2: #c84f00,
                    tpbtnc1: #fe6400,
                    tpbtnc2: #555555,
                    logoBgClr: #fff
                ),
                saddleBrown: (
                    primaryColor: #8b4513,
                    secondaryColor: #431c00,
                    gradientC1: #8b4513,
                    gradientC2: #431c00,
                    tpbtnc1: #8b4513,
                    tpbtnc2: #431c00,
                    logoBgClr: #fff
                ),
                darkGreen: (
                    primaryColor: #006400,
                    secondaryColor: #003a00,
                    gradientC1: #006400,
                    gradientC2: #003a00,
                    tpbtnc1: #006400,
                    tpbtnc2: #003a00,
                    logoBgClr: #fff
                ),
                indigo: (
                    primaryColor: #4b0082,
                    secondaryColor: #270044,
                    gradientC1: #4b0082,
                    gradientC2: #270044,
                    tpbtnc1: #4b0082,
                    tpbtnc2: #270044,
                    logoBgClr: #fff
                ),
                maroon: (
                    primaryColor: #8b0000,
                    secondaryColor: #4a0000,
                    gradientC1: #8b0000,
                    gradientC2: #4a0000,
                    tpbtnc1: #8b0000,
                    tpbtnc2: #4a0000,
                    logoBgClr: #fff
                ),
                crimson: (
                    primaryColor: #dc143c,
                    secondaryColor: #780028,
                    gradientC1: #dc143c,
                    gradientC2: #780028,
                    tpbtnc1: #dc143c,
                    tpbtnc2: #780028,
                    logoBgClr: #fff
                ),
                midnightBlue: (
                    primaryColor: #191970,
                    secondaryColor: #000036,
                    gradientC1: #191970,
                    gradientC2: #000036,
                    tpbtnc1: #191970,
                    tpbtnc2: #000036,
                    logoBgClr: #fff
                ),
                teal: (
                    primaryColor: #008080,
                    secondaryColor: #005050,
                    gradientC1: #008080,
                    gradientC2: #005050,
                    tpbtnc1: #008080,
                    tpbtnc2: #005050,
                    logoBgClr: #fff
                ),
                deepSkyBlue: (
                    primaryColor: #05c1f1,
                    secondaryColor: #0da7ee,
                    gradientC1: #05c1f1,
                    gradientC2: #0da7ee,
                    tpbtnc1: #05c1f1,
                    tpbtnc2: #0da7ee,
                    logoBgClr: #fff
                ),
                darkTeal: (
                    primaryColor: #016670,
                    secondaryColor: #f8e37d,
                    gradientC1: #016670,
                    gradientC2: #f8e37d,
                    tpbtnc1: #016670,
                    tpbtnc2: #f8e37d,
                    logoBgClr: #fff
                ),
                tpGreen: (
                    primaryColor: #283991,
                    secondaryColor: #28dfff,
                    gradientC1: #2e62ff,
                    gradientC2: #28dfff,
                    tpbtnc1: #283991,
                    tpbtnc2: #28dfff,
                    logoBgClr: #fff
                ),
                tpBlue: (
                    primaryColor: #0059b7,
                    secondaryColor: #051833,
                    gradientC1: #0059b7,
                    gradientC2: #0067f4,
                    tpbtnc1: #0059b7,
                    tpbtnc2: #051833,
                    logoBgClr: #fff
                ),
                tripPro: (
                    primaryColor: #ef5728,
                    secondaryColor: #3d464d,
                    gradientC1: #ef5728,
                    gradientC2: #f8b026,
                    tpbtnc1: #ef5728,
                    tpbtnc2: #ed6f1c,
                    logoBgClr: #fff
                ),
                tripprotheme: (
                    primaryColor: #ef5728,
                    secondaryColor: #3d464d,
                    gradientC1: #ef5728,
                    gradientC2: #f8b026,
                    tpbtnc1: #ef5728,
                    tpbtnc2: #ed6f1c,
                    logoBgClr: #fff
                ),
                flyexRed: (
                    primaryColor: #df1e17,
                    secondaryColor: #cc0000,
                    gradientC1: #df1e17,
                    gradientC2: #cc0000,
                    tpbtnc1: #dc0c14,
                    tpbtnc2: #ed6f1c,
                    logoBgClr: #fff
                ),
                rocketripclub: (
                    primaryColor: #f26122,
                    secondaryColor: #5321a0,
                    primaryBGColor: #050517
                ),
                ettheme: (
                    primaryColor: #2b81d8,
                    secondaryColor: #c96dd8,
                    primaryBGColor: #232647
                ),
                tptheme: (
                    primaryColor: #ef5728,
                    secondaryColor: #1e282c,
                    primaryBGColor: #344453
                ),
                trips1: (
                    primaryColor: #ff0000,
                    secondaryColor: #ff0000,
                    primaryBGColor: #ff0000
                ),
                trips2: (
                    primaryColor: #ff5a10,
                    secondaryColor: #006ce6,
                    primaryBGColor: #000000
                ),
                trips3: (
                    primaryColor: #386ffe,
                    secondaryColor: #fcb84b,
                    primaryBGColor: #000000
                ),
                trips4: (
                    primaryColor: #492ef9,
                    secondaryColor: #e9357c,
                    primaryBGColor: #000000
                ),
                trips5: (
                    primaryColor: #e9357c,
                    secondaryColor: #492ef9,
                    primaryBGColor: #000000
                ),
                trips6: (
                    primaryColor: #21e2eb,
                    secondaryColor: #f9662a,
                    primaryBGColor: #000000
                ),
                trips7: (
                    primaryColor: #ff4f0b,
                    secondaryColor: #4f3b9e,
                    primaryBGColor: #000000
                ),
                trips8: (
                    primaryColor: #792542,
                    secondaryColor: #ff9900,
                    primaryBGColor: #000000
                ),
                trips9: (
                    primaryColor: #c3083f,
                    secondaryColor: #6e00ff,
                    primaryBGColor: #1a1a1c
                ),
                trips10: (
                    primaryColor: #2d9cca,
                    secondaryColor: #c3083f,
                    primaryBGColor: #232647
                ),
                trips11: (
                    primaryColor: #87c232,
                    secondaryColor: #faed25,
                    primaryBGColor: #46344e
                ),
                trips12: (
                    primaryColor: #04395e,
                    secondaryColor: #00e66f,
                    primaryBGColor: #040f0f
                ),
                trips13: (
                    primaryColor: #4ace85,
                    secondaryColor: #ff7b7b,
                    primaryBGColor: #05386b
                )
            );`
        )
    }
}