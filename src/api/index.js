const api = {
    get: {
			// this is a pseudo get request for todo's list
			todo: async () => {
				return {
					result: [
						{
							id: 1,
							title: 'TODO 1',
							text: 'This is a test TODO №1',
							status: 'active',
						},
						{
							id: 2,
							title: 'TODO 2',
							text: 'This is a test TODO №2',
							status: 'active',
						},
						{
							id: 3,
							title: 'TODO 3',
							text: 'This is a test TODO №3',
							status: 'active',
						},
					]
				}
			}
		}
}

export default api