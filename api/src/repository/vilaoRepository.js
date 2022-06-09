import { con } from './Connection.js'

export async function NovoVilao(Vilao) {
    const comando = `
    insert  INTO TB_VILAO (NM_VILAO,DS_MALDADE,BT_SUPER_PODER)
        VALUES (?,?,?);
    `
    const [resposta] = await con.query(comando, [Vilao.nome, Vilao.maldade, Vilao.TemPoder])
    return Vilao
}

export async function Listar() {
    const comando = `
    Select 
    nm_vilao		nome,
    ds_maldade		maldade,
    bt_super_poder	TemPoder
    from tb_vilao;
    `
    const [resposta] = await con.query(comando)
    return resposta
}