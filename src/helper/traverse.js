const iu = a => typeof a !== "undefined";
const si = a => iu(a) ? a + '.' : "";

export function traverse(obj, parent=undefined)
{
    if (Array.isArray(obj))
    {
        if (obj.length === 0)
			return [];
		if (iu(parent))
			parent += "[]"
		return traverse(obj[0], parent);
    }
    else
    {
        return Object.keys(obj).reduce((acc, curr, i) => {
            if (obj[curr] === null)
                acc.push([si(parent) + curr, "null"]);
            else if (typeof obj[curr] === "object")
            {
                if (Array.isArray(obj[curr]))
                    acc.push([si(parent) + curr, "array"]);
                else
                    acc.push([si(parent) + curr, "object"])
                acc.push(...traverse(obj[curr], si(parent) + curr));				
            }
            else
                acc.push([si(parent) + curr, typeof obj[curr]]);
            return acc;
        }, []);
    }
}

export function traverseNormal(obj)
{
    if (Array.isArray(obj))
    {
        if (obj.length === 0)
			return [];
		if (typeof obj[0] !== "object")
			return [typeof obj[0]]
		return [traverseNormal(obj[0])];
    }
    else
    {
        return Object.keys(obj).reduce((acc, curr, i) => {
            if (obj[curr] === null)
                acc[curr] = "null";
            else if (typeof obj[curr] === "object")
                acc[curr] = traverseNormal(obj[curr]);
            else
                acc[curr] = typeof obj[curr];
            return acc;
        }, {});
    }
}
