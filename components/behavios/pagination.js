export const paginationBev = Behavior({
    data: {
        dataArray: [],
        total: null
    },
    methods: {
        init(){
            this.data.dataArray = []
            this.data.total = null
        },
        setMoreData(dataArray) {
            const temp = this.data.dataArray.concat(dataArray)
            this.setData({
                dataArray: temp
            })

        },

        getCurrentStart() {
            return this.data.dataArray.length
        },
        setTotal(total) {
            this.data.total = total
        },
        hasMore() {
            return this.data.dataArray.length < this.data.total
        }
    }
})