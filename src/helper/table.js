
function join(a=[], param=0)
{
    let s = "|";
    if (a.length !== 0)
        s = `| ${a.join(" | ")} |`;
    
    if (a.length !== param)
    {
        for (let i = 1; i <= param - a.length; i++)
            s += " - |";
    }
    return s;
}

export function buildTable(obj, config)
{
    const l = config.parameters.length;
    
    let s = join(config.parameters, l) + "\n" + join([], l);
    for (let i of obj)
    {
        let tmp = [];
        for (let v = 0; v <= Math.max(config.name, config.type); v++)
        {
            switch (v) {
                case config.name:
                    tmp.push(i[0]);
                    break;
                case config.type:
                    tmp.push('`' + i[1] + '`');
                    break;
                default:
                    tmp.push('-');
                    break;
            }
        }
        s += "\n" + join(tmp, l);
    }

    return s;
}