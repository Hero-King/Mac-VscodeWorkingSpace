
React.Fragment
官方文档：
React 中一个常见模式是为一个组件返回多个元素。Fragments 可以让你聚合一个子元素列表，并且不在DOM中增加额外节点。
Fragments 看起来像空的 JSX 标签：
render() {
    return (
        <>
            <ChildA />
            <ChildB />
            <ChildC />
        </>
    );
}

一个常见模式是为一个组件返回一个子元素列表。以这个示例的 React 片段为例：
class Table extends React.Component {
    render() {
        return (
            <table>
                <tr>
                    <Columns />
                </tr>
            </table>
        );
    }
}

为了渲染有效的 HTML ， <Columns /> 需要返回多个 < td > 元素。如果一个父 div 在 < Columns /> 的 render() **** 函数里面使用，那么最终的 HTML 将是无效的。
class Columns extends React.Component {
    render() {
        return (
            <div>
                <td>Hello</td>
                <td>World</td>
            </div>
        );
    }
}

在 < Table /> 组件中的输出结果如下：
<table>
    <tr>
        <div>
            <td>Hello</td>
            <td>World</td>
        </div>
    </tr>
</table>

所以，我们介绍 Fragments。
class Columns extends React.Component {
    render() {
        return (
            <>
                <td>Hello</td>
                <td>World</td>
            </>
        );
    }
}

在正确的 < Table /> 组件中，这个结果输出如下：
<table>
    <tr>
        <td>Hello</td>
        <td>World</td>
    </tr>
</table>

你可以像使用其它元素那样使用 <></>。
另一种使用片段的方式是使用 React.Fragment 组件，React.Fragment 组件可以在 React 对象上使用。 这可能是必要的，如果你的工具还不支持 JSX 片段。 注意在 React 中， <></> 是 < React.Fragment /> 的语法糖。
class Columns extends React.Component {
    render() {
        return (
            <React.Fragment>
                <td>Hello</td>
                <td>World</td>
            </React.Fragment>
        );
    }
}

带 key 的 Fragments
    <></> 语法不能接受键值或属性。
如果你需要一个带 key 的片段，你可以直接使用 < React.Fragment /> 。
一个使用场景是映射一个集合为一个片段数组 — 例如：创建一个描述列表：
function Glossary(props) {
    return (
        <dl>
            {props.items.map(item => (
                // 没有`key`，将会触发一个key警告
                <React.Fragment key={item.id}>
                    <dt>{item.term}</dt>
                    <dd>{item.description}</dd>
                </React.Fragment>
            ))}
        </dl>
    );
}

key 是唯一可以传递给 Fragment 的属性。在将来，我们可能增加额外的属性支持，比如事件处理。

作者：小小美呀
链接：https://www.jianshu.com/p/0c486b8f8b65
来源：简书
简书著作权归作者所有，任何形式的转载都请联系作者获得授权并注明出处。