export const paginationBev = Behavior({
    data: {
        dataArray: [],
        total: null,
        noneResult:false,
        loading:false
    },
    methods: {
        init() {
            // this.data.dataArray = []
            this.setData({
                dataArray: [],
                noneResult: false,
                loading:false
            })
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
            if (total === 0){
                this.setData({
                    noneResult:true
                })
            }
        },
        hasMore() {
            return this.data.dataArray.length < this.data.total
        },
        isLocked() {
            return this.data.loading
        },
        locked() {
            // this.data.loading = true
            this.setData({
                loading: true
            })
        },
        unLocked() {
            this.setData({
                loading: false
            })

        },
    }
})