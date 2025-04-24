# app/helpers/preact_component_helper.rb

module PreactComponentHelper
  def preact_component(name, props = {})
    content_tag :div, "", id: "preact-root",
      data: { component: name, props: props.to_json }
  end
end
