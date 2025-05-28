import Post from '../models/Post.js'

async function createMovimentacao(req, res) {
    const { category, title, value, type } = req.body

    const operacaoValue = Math.round(value * 100)

    const id = await Post.create({ category, title, value: operacaoValue, type })


    if (id) {
        res.status(201).json({ id, category, title, value, type })
    } else {
        res.status(500).json({ message: 'Não foi possível criar o usuário!' })
    }
}

async function getMovimentacao(req, res) {
    const posts = await Post.findAll()
    if (posts) {
        res.json(posts.map(posts => posts.toJSON()))
    } else {
        res.status(500).json({ message: 'Não foi possível buscar usuários!' })
    }
}

async function getMovimentacaoById(req, res) {
    const { id } = req.params; // Pegando o ID da URL


    try {
        const post = await Post.findOne({ where: { id } });
        if (post) {
            res.json(post.toJSON());
        } else {
            res.status(404).json({ message: 'Movimentação não encontrado!' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar Movimentação!', error });
    }
}


async function getMovimentacaoSoma(req, res) {
    const posts = await Post.findAll()

    let totalSaida = 0
    let totalEntrada = 0
    let saldoAtual = 0

    for (var i = 0; i < posts.length; i++) {
        if (posts[i].type == 'Saída') {
            totalSaida += posts[i].value
        } else if (posts[i].type == 'Entrada') {
            totalEntrada += posts[i].value
        }
    }

    saldoAtual = (totalEntrada - totalSaida) / 100
    totalEntrada = parseFloat((totalEntrada / 100).toFixed(2))
    totalSaida = parseFloat((totalSaida / 100).toFixed(2))

    const valores = [saldoAtual, totalEntrada, totalSaida]

    res.json(valores)

    console.log('Saida ', totalSaida)
    console.log('Entrada ', totalEntrada)
    console.log('SALDO ', saldoAtual)
}

async function deleteMovimentacao(req, res) {
    try {
        const { id } = req.params

        // Procurando e deletando o post associado ao id
        const del = await Post.destroy({ where: { id } })

        if (!del) {
            return res.status(404).json({ mensagem: 'Movimentação não encontrado' })
        }

        res.status(200).json({ mensagem: 'Movimentação deletado com sucesso!' })
    } catch (erro) {
        res.status(500).json({ mensagem: 'Erro ao deletar o Movimentação', erro })
    }
}

async function updateMovimentacao(req, res) {
    try {
        const { id } = req.params
        const { category, title, value, type } = req.body

        const operacaoValue = Math.round(value * 100)

        const [rowsUpdated] = await Post.update(
            { category, title, value: operacaoValue, type },
            { where: { id } }
            )

        if (rowsUpdated === 0) {
            return res.status(404).json({ mensagem: 'Não foi possível atualizar o movimentação' })
        }
        res.status(200).json({ mensagem: 'Movimentação atualizada com sucesso!' })
    } catch (erro) {
        res.status(500).json({ mensagem: 'Erro ao atualizar a movimentação', erro })
    }
}

async function getPostsEntrada(req, res) {
    const posts = await Post.ge({})
    if (posts) {
        res.json(posts.map(posts => posts.toJSON()))
    } else {
        res.status(500).json({ message: 'Não foi possível buscar usuários!' })
    }
}


async function getMovimentacaoByUserId(req, res) {
    const { userId } = req.params

    res.send(`postagens do usuário ${userId}`)
}

export default { createMovimentacao, getMovimentacao, getMovimentacaoByUserId, getMovimentacaoSoma, getMovimentacaoById, deleteMovimentacao, updateMovimentacao }