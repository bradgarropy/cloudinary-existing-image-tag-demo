const logTags = response => {
    const appliedTags = response.tags
    const possibleTags = response.info.categorization.google_tagging.data.slice(
        0,
        10,
    )

    console.log("POSSIBLE TAGS")
    console.table(possibleTags)

    console.log("APPLIED TAGS")
    console.table(appliedTags)
}

export {logTags}
