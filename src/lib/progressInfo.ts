

export const progressInfo = (currentProgress: number | null) => {

    let progresColor = ""

    if( currentProgress! >= 0 && currentProgress! < 20) {
        progresColor = '-red-500'
    } else if( currentProgress! >= 20 && currentProgress! < 41) {
        progresColor = '-orange-500'
    } else if(currentProgress! >= 41 && currentProgress! < 61) {
        progresColor = '-amber-500'
    } else if( currentProgress! >= 61 && currentProgress! < 80) {
        progresColor = '-lime-400'
    } else {
        progresColor = '-emerald-500'
    }

    return progresColor
}