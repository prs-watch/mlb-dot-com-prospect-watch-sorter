/*
author: prs-watch

This script sorts player-cards by selected options.
*/
$(window).on('load', () => {
    const params = location.search
    const sort_key = params.match(/sort=(.*?)(&|$)/)[1]
    console.log(sort_key)
    const cards = $('#cards').find('li')
    let sort_list = []
    for (const card of cards){
        const rank = $(card).find('.number')
        const pos = $(card).find('.player-info')
        const name = $(card).find('.player-name')
        sort_list.push({
            'rank': Number(rank.text()),
            'pos': pos.text(),
            'name': name.text(),
            'elm': card
        })
    }
    // sort
    sort_list.sort((before, after) => {
        if (sort_key == 'pos'){
            // by position
            if (before.pos > after.pos) return 1
            if (before.pos < after.pos) return -1
            if (before.pos = after.pos) return 0
        } else if (sort_key == 'name'){
            // by name
            if (before.name > after.name) return 1
            if (before.name < after.name) return -1
            if (before.name = after.name) return 0
        } else {
            // by rank (default)
            if (before.rank > after.rank) return 1
            if (before.rank < after.rank) return -1
            if (before.rank = after.rank) return 0
        }
    })
    $('#cards').empty()
    for (const li of sort_list){
        $('#cards').append(li['elm'])
    }
})
