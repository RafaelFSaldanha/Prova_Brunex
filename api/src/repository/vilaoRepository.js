import { con } from './connection.js'

export async function vilao (nome, maldade, super_poder) {
    const comando = `
    insert into tb_vilao (nm_vilao, ds_maldades, bt_super_poder)
	values (?, ?, ?)`
    
    const [linhas] = await con.query (comando, [nome, maldade, super_poder]
    )
        return linhas [0];
}