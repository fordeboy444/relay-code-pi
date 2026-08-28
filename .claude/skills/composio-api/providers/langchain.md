# LangChain

- **URL:** https://docs.composio.dev/providers/langchain
- **Summary:** Build an agent with LangChain or LangGraph and enable it to use 1000+ tools with Composio.

The LangChain provider formats Composio tools for [LangChain](https://python.langchain.com/) and [LangGraph](https://langchain-ai.github.io/langgraph/) agents. Pick the tab that matches your setup.

The LangChain provider transforms each Composio tool into a LangChain [`DynamicStructuredTool`](https://js.langchain.com/docs/concepts/tools/) with built-in execution. You can hand the tools to `create_agent` in Python or wire them into a graph node in TypeScript, and the framework runs the tool loop for you.

**Install**

**Configure API Keys**

Set `COMPOSIO_API_KEY` with your API key from [Settings](https://dashboard.composio.dev/~/project/settings/api-keys?utm_source=docs&utm_medium=content&utm_campaign=docs-providers-langchain) and `OPENAI_API_KEY` with your [OpenAI API key](https://platform.openai.com/api-keys).

```txt title=".env"
COMPOSIO_API_KEY=xxxxxxxxx
OPENAI_API_KEY=xxxxxxxxx
```

**Create session and run**

```python
from composio import Composio
from composio_langchain import LangchainProvider
from langchain.agents import create_agent
from langchain_openai import ChatOpenAI

composio = Composio(provider=LangchainProvider())
llm = ChatOpenAI(model="gpt-5.2")

# Create a session for your user
session = composio.create(user_id="user_123")
tools = session.tools()

agent = create_agent(tools=tools, model=llm)
result = agent.invoke({"messages": [("user", "Send an email to john@example.com with the subject 'Hello' and body 'Hello from Composio!'")]})

print(result["messages"][-1].content)
```

```typescript

const composio = new Composio({
  provider: new LangchainProvider(),
});

// Create a session for your user
const session = await composio.create("user_123");
const tools = await session.tools();

const toolNode = new ToolNode(tools);

const model = new ChatOpenAI({
  model: 'gpt-5.2',
  temperature: 0,
}).bindTools(tools);

function shouldContinue({ messages }: typeof MessagesAnnotation.State) {
  const lastMessage = messages[messages.length - 1] as AIMessage;
  if (lastMessage.tool_calls?.length) {
    return 'tools';
  }
  return '__end__';
}

async function callModel(state: typeof MessagesAnnotation.State) {
  const response = await model.invoke(state.messages);
  return { messages: [response] };
}

const workflow = new StateGraph(MessagesAnnotation)
  .addNode('agent', callModel)
  .addEdge('__start__', 'agent')
  .addNode('tools', toolNode)
  .addEdge('tools', 'agent')
  .addConditionalEdges('agent', shouldContinue);

const app = workflow.compile();

const finalState = await app.invoke({
  messages: [new HumanMessage("Send an email to john@example.com with the subject 'Hello' and body 'Hello from Composio!'")],
});
console.log(finalState.messages[finalState.messages.length - 1].content);
```

The LangGraph provider transforms Composio tools into the same LangChain `DynamicStructuredTool` format, ready to use with LangGraph agents. LangGraph integration is Python-only.

**Install**

**Configure API Keys**

Set `COMPOSIO_API_KEY` with your API key from [Settings](https://dashboard.composio.dev/~/project/settings/api-keys?utm_source=docs&utm_medium=content&utm_campaign=docs-providers-langchain) and `OPENAI_API_KEY` with your [OpenAI API key](https://platform.openai.com/api-keys).

```txt title=".env"
COMPOSIO_API_KEY=xxxxxxxxx
OPENAI_API_KEY=xxxxxxxxx
```

**Create session and run**

```python
from composio import Composio
from composio_langgraph import LanggraphProvider
from langchain.agents import create_agent
from langchain_openai import ChatOpenAI

composio = Composio(provider=LanggraphProvider())
llm = ChatOpenAI(model="gpt-5.2")

# Create a session for your user
session = composio.create(user_id="user_123")
tools = session.tools()

agent = create_agent(tools=tools, model=llm)
result = agent.invoke({"messages": [("user", "Send an email to john@example.com with the subject 'Hello' and body 'Hello from Composio!'")]})

print(result["messages"][-1].content)
```

## Next

<Card icon={} title="What is a session?" href="/docs/how-composio-works" description="How sessions scope users, tools, and auth, and how to reuse them across requests." />
