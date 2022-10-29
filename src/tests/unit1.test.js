const groupAndMembers = require('./utils/forTesting')

test('groupAndMember receives more than one element in the array', () => {
    const array = groupAndMembers({
        group: {
            id: 1,
            user: 1
        },
        group: {
            id: 1,
            user: 2
        }
    })

    expect(array).toBe([1,2])
})