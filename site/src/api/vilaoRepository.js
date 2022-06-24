
export async function cadastrarVilao (nome, maldade, TemPoder) {
    const v = await api.post('/vilao', {
        nome: nome,
        maldade: maldade,
        TemPoder, TemPoder
    });
    return v.data;
}

export async function viloes (nome, maldadem, TemPoder) {
    const vi = await api.get('/vilao', {
        nome: nome,
        maldade: maldade,
        TemPoder, TemPoder
    })
}